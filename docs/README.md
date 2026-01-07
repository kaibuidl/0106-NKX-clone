# 项目文档

欢迎来到项目文档中心。这里包含了所有相关的技术文档和资源索引。

## 📚 文档导航

### 核心功能

#### [Exchange 核心模块](./exchange/README.md)
加密货币兑换的完整业务逻辑，独立于 UI 实现。

**包含内容**:
- 状态模型和数据结构
- 4 步交易流程状态机
- 多提供商报价计算
- 实时/固定汇率模式
- 价格 API（带缓存和去重）
- 输入验证规则
- UI 实现契约

**相关文件**:
- `lib/exchange/*` - 核心模块源码
- `exchange-app.html` - 参考 UI 实现
- `EXCHANGE_FEATURES.md` - 功能清单

---

### 归档资源

#### [Demo 页面归档](./archive/INDEX.md)
各种 demo 页面和原型的索引。

**包含内容**:
- Portfolio - 品牌设计作品集
- Rocket Landing - 太空旅行落地页
- Bookshop - 在线书店克隆
- Travel App - 旅行应用原型
- Wallhaven - 图片浏览器
- 其他测试页面

---

## 🗂️ 项目结构

```
/
├── app/                    # Next.js 应用
│   ├── page.tsx           # 主页（Steps demo）
│   ├── layout.tsx         # 布局
│   └── globals.css        # 全局样式
│
├── lib/                    # 共享库
│   ├── exchange/          # Exchange 核心模块 ⭐
│   │   ├── assets.ts      # 资产定义
│   │   ├── providers.ts   # 提供商配置
│   │   ├── quote.ts       # 报价计算
│   │   ├── rates.ts       # 价格 API
│   │   ├── validation.ts  # 验证逻辑
│   │   ├── steps.ts       # 步骤状态机
│   │   └── index.ts       # 统一导出
│   └── utils.ts           # 工具函数
│
├── components/             # React 组件
│   └── ui/
│       └── steps.tsx      # Steps 组件
│
├── docs/                   # 文档 📖
│   ├── README.md          # 本文件
│   ├── exchange/          # Exchange 文档
│   │   └── README.md      # 核心功能文档
│   └── archive/           # 归档索引
│       └── INDEX.md       # Demo 页面索引
│
├── archive/                # 归档的 demo 页面
│   ├── portfolio/         # 作品集
│   ├── rocket/            # 太空落地页
│   ├── bookshop/          # 书店克隆
│   ├── travel/            # 旅行应用
│   ├── wallhaven/         # 图片浏览
│   └── misc/              # 其他
│
├── exchange-app.html       # Exchange 参考实现 ⭐
├── EXCHANGE_FEATURES.md    # Exchange 功能清单
├── SETUP_COMPLETE.md       # 设置说明
│
└── [配置文件]
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    └── next.config.js
```

## 🎯 快速开始

### Exchange 开发

1. **查看文档**: 阅读 [Exchange 核心文档](./exchange/README.md)
2. **查看源码**: 浏览 `lib/exchange/` 了解实现
3. **参考 UI**: 打开 `exchange-app.html` 查看参考实现
4. **开始开发**: 基于 core 模块构建你的自定义 UI

```typescript
// 示例：使用 Exchange core
import { ASSETS, fetchPrice, calculateQuote } from '@/lib/exchange';

const rate = await fetchPrice('BTC', 'ETH');
const amount = calculateQuote(rate, 'NKX', 1000);
```

### Next.js 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 查看 Demo 页面

直接在浏览器打开 `archive/` 下的 HTML 文件，或参考 [归档索引](./archive/INDEX.md)。

## 📖 文档说明

### Exchange 核心文档
详细描述了 Exchange 的业务逻辑、状态模型、API 策略等，是开发多版本 UI 的必读文档。

**适合人群**:
- 需要基于 Exchange core 开发新 UI 的开发者
- 需要了解报价计算、验证规则的开发者
- 需要集成 Exchange 功能的开发者

### 归档索引
列出了所有归档的 demo 页面，包含入口、技术栈、运行方式等信息。

**适合人群**:
- 需要查找历史 demo 的开发者
- 需要参考某个页面设计的开发者

## 🔧 技术栈

- **Next.js 15** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **React 18** - UI 库
- **CoinGecko API** - 加密货币价格数据

## 📝 维护说明

### 添加新文档
1. 在 `docs/` 下创建对应目录
2. 编写 README.md
3. 在本文件添加链接

### 归档新页面
1. 移动文件到 `archive/` 对应子目录
2. 更新 `docs/archive/INDEX.md`
3. 确保相对路径正确

### 更新 Exchange 文档
1. 修改 `docs/exchange/README.md`
2. 同步更新 `lib/exchange/` 源码注释
3. 更新 `EXCHANGE_FEATURES.md`（如有功能变更）

## 🤝 贡献

如果你发现文档有误或需要补充，欢迎提交修改。

---

**最后更新**: 2026-01-07  
**维护者**: Project Team

