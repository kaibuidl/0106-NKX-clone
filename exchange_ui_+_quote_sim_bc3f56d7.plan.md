---
name: Exchange UI + Quote Sim
overview: Keep the current single-file prototype but add real-time pricing via a public API and simulate Changelly-like Exchange flow (pair selection, live/fixed rate, swap, steps, provider quotes) while preserving the existing buidlpad color theme.
todos:
  - id: state-model
    content: Define Exchange state model + reducers/hooks in `exchange-app.html`
    status: completed
  - id: price-api
    content: Integrate public price API with caching + debounce + error fallback
    status: completed
    dependencies:
      - state-model
  - id: rate-modes
    content: Implement Real-time vs Fixed rate behavior (lock + countdown + refresh)
    status: completed
    dependencies:
      - price-api
  - id: pair-picker
    content: Add asset list + searchable modal picker for from/to assets
    status: completed
    dependencies:
      - state-model
  - id: swap-action
    content: Implement Swap action and re-quote logic
    status: completed
    dependencies:
      - pair-picker
      - price-api
  - id: quotes-module
    content: Simulate multiple providers quotes and allow selecting best provider
    status: completed
    dependencies:
      - price-api
  - id: step-flow
    content: Implement 4-step flow screens with validation and button states
    status: completed
    dependencies:
      - state-model
      - rate-modes
  - id: polish-ui
    content: Polish UI states (loading/error/disabled) while keeping current theme
    status: completed
    dependencies:
      - step-flow
      - quotes-module
  - id: todo-1767688487223-sseicgcz7
    content: Change the buidlpad logo to NKX on top left navigation bar
    status: completed
  - id: todo-1767688520211-j9259mmqa
    content: ""
    status: cancelled
---

# Buidlpad Exchange（仿 Changelly）单文件原型实现计划

## 目标

- 基于现有 `exchange-app.html` 的 UI（主色调不变），补齐 **Changelly Exchange 的交互和数据**：
- 币对选择
- Real-time Rate / Fixed Rate 切换
- 输入金额（You send / You get）双向联动
- Swap（上下币种互换）
- Quotes（多供应商报价对比）
- Step 流程（1/4 -> 4/4）与按钮状态/校验

## 数据源（按你选的）

- 用 **公开 API** 拉实时价格（默认建议 coinmarketcap的 simple price 端点），再在前端做：
- 汇率计算
- 点差/手续费/最小最大限额模拟
- Fixed rate 锁价（倒计时 + 过期重新报价）

## 代码改动范围（只改/加前端文件）

- 主要改动：[`exchange-app.html`](/Users/ml/Documents/04%20Cursor/2026/Cur%20-%20Jan/0106%20clone%20site/exchange-app.html)
- 可选新增（如果你愿意把脚本拆开更清爽，但仍然保持单文件可运行）：
- `exchange.logic.js`（报价/格式化/路由模拟）
- `exchange.ui.js`（state + 组件）
- 然后 `exchange-app.html` 用 `<script type="module">` 引入

## 具体实现步骤

1. **抽象 Exchange 状态模型**（在单文件 React 里）

- state: `mode (realtime|fixed)`, `fromAsset`, `toAsset`, `fromAmount`, `toAmount`, `lastRate`, `fixedRateExpiresAt`, `loading`, `error`, `stepIndex`
- 交互：输入框 debounce，避免每个 keypress 都打 API

2. **接入公开价格 API（实时）**

- 建 `fetchPrice(from,to)`，带缓存（例如 10s TTL）和并发去重
- 失败降级：用上一次 rate 或 mock 小幅波动

3. **Real-time / Fixed Rate 模拟**

- Real-time：每次输入/定时刷新（例如 10s）更新 rate
- Fixed：点击切换时锁一次 rate，显示倒计时（例如 30s 或 60s），过期后提示刷新

4. **计算引擎（仿交易所体验）**

- 规则：
    - `rate` 来自 API
    - `spreadBps`（例如 20–80 bps）
    - `fee`（例如 network fee + service fee）
    - `min/max` 限额（用于按钮禁用和错误提示）
- You send 改动 -> 算 You get；You get 改动 -> 反算 You send

5. **币对选择 UI**

- 点击币种区域弹出 modal（搜索 + 常用列表）
- 资产列表先做小集合（USDT/ETH/BTC/SOL/BNB/USDC），后续可扩

6. **Swap 按钮**

- 互换 `from/to`，同时互换输入值（或重新按 rate 计算），并触发重新报价

7. **Quotes 模块（多供应商对比）**

- 生成 3 provider（Changelly/ChangeNOW/NKX）
- 每个 provider 用不同 `spread/fee` 规则算最终 `toAmount`
- 高亮 best quote（绿色）并支持点击选择 provider

8. **Step 流程（1/4 -> 4/4）**

- Step1: Select pair（已有）
- Step2: Enter address（加一个地址输入框 + 基础校验）
- Step3: Confirm（展示摘要：rate/fee/min received）
- Step4: Processing（fake progress + “done” 状态）

9. **视觉一致性**

- 不改你当前主色调：背景 `#f7f9fd`、边框灰、绿色成功色等
- 只补齐缺失的 hover/disabled/error 样式（同色系）

## 验收标准

- 输入任意支持币对金额时，能看到 **实时刷新** 的换算
- 切到 Fixed Rate 后能看到 **锁价倒计时**，到期提示刷新
- Swap 正常工作