# Wise Design System (Rebrand)

## 设计原则 (Design Principles)

1.  **Bold & Direct**: 使用高对比度的色彩（荧光绿 vs 深蓝），传达自信与清晰。
2.  **Universal**: 设计语言通用且易于访问，强调国际化属性。
3.  **Pill Shapes**: 核心视觉特征是完全圆角（Pill shape）的按钮和容器。

## 色彩系统 (Color System)

Wise 的品牌色极其鲜明，核心在于 **Forest Green** 与 **Navy** 的强烈对比。

### 品牌色 (Brand Colors)

| 名称 | Hex | 用途 | 备注 |
| :--- | :--- | :--- | :--- |
| **Wise Forest Green** | `#9fe870` | **主品牌色** / CTA 按钮背景 | **核心识别色**，文字必须搭配深色 (#163300) 以保证对比度。 |
| **Wise Navy** | `#37517e` | 主要文字 / 标题 / 背景 | 经典的信任蓝，用于大面积背景或标题文字。 |
| **Dark Forest** | `#163300` | CTA 按钮文字 / 极深背景 | 比纯黑更有质感的深绿色，用于搭配 Forest Green。 |
| **Pale Blue** | `#00a2dd` | 链接 / 辅助高亮 | 用于文字链接或次级交互元素。 |

### 功能色 (Functional Colors)

| 名称 | Hex | 用途 |
| :--- | :--- | :--- |
| **Error Red** | `#e74848` | 错误提示 / 警告图标 |
| **Warning Yellow** | `#fadc65` | 注意事项 / 待处理 |
| **Success Green** | `#2ead4b` | 成功状态（深色文本） |
| **Background** | `#F2F5F7` | 页面通用底色（浅灰蓝） |
| **Surface** | `#FFFFFF` | 卡片背景 |

### CSS 变量参考

```css
:root {
  --wise-green: #9fe870;
  --wise-navy: #37517e;
  --wise-dark-forest: #163300;
  --wise-blue: #00a2dd;
  --wise-bg: #F2F5F7;
  --wise-surface: #ffffff;
}
```

## 字体系统 (Typography)

*   **Primary Font**: `Wise Sans` (专有字体)
*   **Fallback / Web Safe**: `Inter` (Google Fonts)
*   **特征**: 
    *   标题通常使用 **Bold** 或 **ExtraBold**。
    *   字间距 (`tracking`) 稍微收紧 (`-0.02em`) 以模拟 Wise Sans 的紧凑感。

## 核心组件规范 (Core Components)

### 1. 按钮 (Buttons)

Wise 的按钮是最具辨识度的元素，必须是 **Pill Shape** (完全圆角)。

*   **Primary CTA**:
    *   **Background**: `#9fe870` (Forest Green)
    *   **Text**: `#163300` (Dark Forest)
    *   **Border Radius**: `9999px` (Full / Pill)
    *   **Font Weight**: `Bold` / `600`
    *   **Padding**: `12px 24px`

*   **Secondary / Outline**:
    *   **Background**: Transparent
    *   **Border**: `2px solid #37517e` (Navy) 或 `#9fe870`
    *   **Text**: `#37517e` (Navy)

### 2. 卡片 (Cards)

*   **Border Radius**: `24px` (非常圆润)
*   **Background**: `#FFFFFF`
*   **Shadow**: 轻微的阴影或无阴影（Flat），强调清晰的边缘或边框。
*   **Padding**: `24px` 或 `32px`

### 3. 输入框 (Inputs)

*   **Border Radius**: `12px` (Less rounded than buttons)
*   **Border**: `1px solid #d0d0d0`
*   **Focus State**: Border color `#00a2dd` (Pale Blue) or `#37517e` (Navy)

### 4. 警告与提示 (Alerts / Nudges)

Wise 的 Alert 风格通常是 **Flat (扁平色块)**，无边框。

*   **Error**: 浅红背景 (`#ffe5e5`) + 红色图标 + 深色文字。
*   **Info**: 浅蓝背景 (`#eef7f9`) + 蓝色图标 + 深色文字。
*   **Layout**: 图标在左，文字在右，**没有阴影**。

## 布局建议 (Layout)

*   **背景色**: 始终使用 `#F2F5F7` 作为页面底色，避免纯白背景，以突显白色卡片。
*   **间距**: 使用宽松的间距 (`gap-4`, `p-6`)，保持界面呼吸感。
*   **圆角一致性**: 页面中尽量避免直角，所有容器都应带有至少 `16px` 的圆角。

