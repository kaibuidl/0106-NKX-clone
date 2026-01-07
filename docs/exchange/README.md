# Exchange Core - 功能文档

这份文档描述了 Exchange 的核心业务逻辑，独立于任何特定的 UI 实现。你可以基于这套 core 制作多个版本的 UI。

## 概览

Exchange core 提供了完整的加密货币兑换功能，包括：
- 资产管理
- 多提供商报价
- 实时/固定汇率模式
- 4 步交易流程
- 输入验证
- 价格获取（带缓存和去重）

## 模块结构

```
lib/exchange/
├── assets.ts       # 资产定义
├── providers.ts    # 提供商配置
├── quote.ts        # 报价计算
├── rates.ts        # 价格获取（API + 缓存）
├── validation.ts   # 输入验证
├── steps.ts        # 步骤状态机
└── index.ts        # 统一导出
```

## 状态模型

### ExchangeState

```typescript
interface ExchangeState {
  step: number;                    // 当前步骤 (1-4)
  fromAsset?: Asset;               // 发送资产
  toAsset?: Asset;                 // 接收资产
  fromAmount?: string | number;    // 发送数量
  toAmount?: string | number;      // 接收数量
  walletAddress?: string;          // 钱包地址
  selectedProvider?: string;       // 选中的提供商 (NKX/Changelly/ChangeNOW)
  mode?: 'realtime' | 'fixed';    // 汇率模式
  rate?: number;                   // 当前汇率
  processing?: boolean;            // 是否正在处理
}
```

### Asset

```typescript
interface Asset {
  symbol: string;        // 符号 (BTC, ETH, etc.)
  name: string;          // 全名
  network: string;       // 网络名称
  networkTag?: string;   // 网络标签 (BSC, ETH)
  icon: string;          // 图标 URL
  cmcId: string;         // CoinMarketCap ID
  decimals: number;      // 小数位数
}
```

支持的资产：BTC, ETH, USDT, BNB, SOL, USDC

## 步骤状态机

### 步骤定义

```
Step 1: Select pair
  - 选择资产对
  - 输入金额
  - 查看多提供商报价
  - 选择实时/固定汇率模式
  门禁：必须有有效的金额和资产

Step 2: Enter address
  - 输入接收钱包地址
  - 显示网络信息
  门禁：地址长度 >= 20 字符

Step 3: Send funds
  - 确认交易详情
  - 显示汇总信息
  门禁：无（确认步骤）

Step 4: Wait for exchange
  - 显示处理状态
  - 模拟交易处理
  门禁：无（最终步骤）
```

### 状态转换

```typescript
// 检查是否可以前进
canGoNext(state: ExchangeState): boolean

// 检查是否可以后退
canGoPrev(state: ExchangeState): boolean

// 前进到下一步
nextStep(state: ExchangeState): number

// 后退到上一步
prevStep(state: ExchangeState): number

// 跳转到指定步骤（带验证）
goToStep(state: ExchangeState, targetStep: number): number

// 检查步骤是否可访问
isStepAccessible(state: ExchangeState, targetStep: number): boolean
```

## 报价模型

### 提供商配置

```typescript
interface ProviderConfig {
  id: string;           // 提供商 ID
  name: string;         // 显示名称
  spreadBps: number;    // 价差（基点，1 bps = 0.01%）
  networkFee: number;   // 网络费用（固定）
  serviceFee: number;   // 服务费（小数形式）
}
```

**提供商对比**：
- **NKX**: 20 bps 价差，最低费用 → BEST
- **ChangeNOW**: 40 bps 价差，中等费用
- **Changelly**: 60 bps 价差，最高费用

### 报价计算

```typescript
// 正向计算：输入金额 → 输出金额
calculateQuote(baseRate, providerId, fromAmount): number

// 反向计算：输出金额 → 输入金额
calculateReverseQuote(baseRate, providerId, toAmount): number

// 获取所有提供商报价（按最优排序）
calculateAllQuotes(baseRate, fromAmount): QuoteResult[]

// 获取最优报价
getBestQuote(baseRate, fromAmount): QuoteResult | null
```

**计算公式**：
```
spread = 1 - (spreadBps / 10000)
outputAmount = (inputAmount × baseRate × spread) - networkFee
```

## Rate API 策略

### 价格获取

```typescript
fetchPrice(fromSymbol: string, toSymbol: string): Promise<number>
```

**特性**：
1. **缓存机制**：10 秒 TTL，减少 API 调用
2. **请求去重**：相同请求合并，避免并发重复
3. **降级策略**：
   - 优先使用 CoinGecko API
   - API 失败时使用缓存值
   - 无缓存时使用 mock 汇率
4. **数据源**：CoinGecko Simple Price API（无需 API key）

**使用示例**：
```typescript
const rate = await fetchPrice('BTC', 'ETH');
// 自动处理缓存、去重、降级
```

### 辅助函数

```typescript
// 清除缓存（测试或手动刷新）
clearPriceCache(): void

// 获取缓存汇率（不触发请求）
getCachedRate(fromSymbol, toSymbol): number | undefined
```

## 验证规则

### 金额验证

```typescript
isValidAmount(amount, minAmount?, maxAmount?): boolean
validateAmount(amount, minAmount?, maxAmount?): ValidationResult
```

规则：
- 必须大于 0
- 必须是有效数字
- 可选：最小/最大限制

### 地址验证

```typescript
isValidAddress(address, minLength = 20): boolean
validateAddress(address, minLength = 20): ValidationResult
```

规则：
- 非空字符串
- 长度 >= minLength（默认 20）

### 步骤门禁

```typescript
canProceed(step: number, state: ExchangeState): boolean
```

- Step 1: 需要有效金额和资产
- Step 2: 需要有效钱包地址
- Step 3: 总是可以继续
- Step 4: 已是最终步骤

## UI 实现契约

当你基于这套 core 做多版本 UI 时，需要实现以下交互：

### 必需功能

1. **资产选择**
   - 显示 `ASSETS` 列表
   - 支持搜索/过滤
   - 显示图标、名称、网络

2. **金额输入**
   - 双向绑定：`fromAmount` ↔ `toAmount`
   - 使用 `calculateQuote` / `calculateReverseQuote`
   - 防抖处理（建议 500ms）

3. **汇率模式**
   - 实时模式：每 10 秒调用 `fetchPrice`
   - 固定模式：锁定汇率 60 秒，显示倒计时

4. **多提供商报价**
   - 使用 `calculateAllQuotes` 获取所有报价
   - 高亮最优报价（`getBestQuote`）
   - 显示差价

5. **步骤导航**
   - 使用 `canGoNext` / `canGoPrev` 控制按钮状态
   - 调用 `nextStep` / `prevStep` 切换步骤
   - 显示进度指示器（1/4 → 4/4）

6. **验证反馈**
   - 使用 `validateAmount` / `validateAddress` 获取错误信息
   - 实时显示验证状态
   - 禁用无效操作

### 可选增强

- 交换按钮（fromAsset ↔ toAsset）
- 加载状态（调用 API 时）
- 错误提示（API 失败时）
- 交易历史
- 多语言支持

## 使用示例

### 基础集成

```typescript
import {
  ASSETS,
  fetchPrice,
  calculateQuote,
  canProceed,
  nextStep,
} from '@/lib/exchange';

// 1. 初始化状态
const [state, setState] = useState<ExchangeState>({
  step: 1,
  fromAsset: ASSETS[2], // USDT
  toAsset: ASSETS[1],   // ETH
  fromAmount: '1000',
  selectedProvider: 'NKX',
  mode: 'realtime',
});

// 2. 获取汇率
const rate = await fetchPrice(state.fromAsset.symbol, state.toAsset.symbol);

// 3. 计算报价
const toAmount = calculateQuote(rate, state.selectedProvider, state.fromAmount);

// 4. 验证并前进
if (canProceed(state.step, state)) {
  const newStep = nextStep(state);
  setState({ ...state, step: newStep });
}
```

### 多提供商报价

```typescript
import { calculateAllQuotes, getBestQuote } from '@/lib/exchange';

const quotes = calculateAllQuotes(rate, fromAmount);
const best = getBestQuote(rate, fromAmount);

quotes.forEach(quote => {
  console.log(`${quote.provider}: ${quote.amount} (best: ${quote === best})`);
});
```

## 技术细节

### 性能优化

- **缓存**：10 秒 TTL，减少 API 调用
- **去重**：合并相同请求
- **防抖**：UI 层建议对输入防抖 500ms

### 错误处理

- API 失败自动降级到缓存/mock
- 所有验证函数返回明确的错误信息
- 边界情况处理（0、负数、NaN 等）

### 扩展性

- 添加新资产：修改 `assets.ts`
- 添加新提供商：修改 `providers.ts`
- 自定义验证规则：扩展 `validation.ts`
- 调整费用模型：修改 `quote.ts`

## 与原实现的对齐

这套 core 完全对齐 `exchange-app.html` 的实现：

- ✅ 相同的资产列表和元数据
- ✅ 相同的提供商配置和费用
- ✅ 相同的报价计算公式
- ✅ 相同的 CoinGecko API 集成
- ✅ 相同的缓存和去重策略
- ✅ 相同的验证规则
- ✅ 相同的 4 步流程

## 下一步

1. 查看 `lib/exchange/` 源码了解实现细节
2. 参考 `exchange-app.html` 作为参考 UI
3. 基于 core 构建你的自定义 UI
4. 根据需求扩展功能

## 相关文档

- [EXCHANGE_FEATURES.md](../../EXCHANGE_FEATURES.md) - 原功能清单
- [lib/exchange/](../../lib/exchange/) - 源码
- [exchange-app.html](../../exchange-app.html) - 参考实现

