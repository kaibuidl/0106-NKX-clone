# Uniswap Design System (Wise Themed)

This design system adapts the Uniswap interface structure to the Wise brand identity.

## 1. Color Palette (Wise Theme)

We utilize the high-contrast Wise color system to replace Uniswap's standard palette.

### Core Colors
| Role | Wise Color | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Action** | Wise Forest Green | `#9fe870` | Main "Swap" / "Connect" buttons |
| **Primary Text (On Green)** | Dark Forest | `#163300` | Text on Primary Buttons |
| **Secondary Action** | Wise Navy | `#37517e` | Secondary buttons, Active states |
| **Background** | Wise Background | `#F2F5F7` | App page background |
| **Card Surface** | White | `#FFFFFF` | Main Swap Card background |
| **Input Background** | Off-White / Light Gray | `#F9FAFB` | Token input container background (Simulating Uniswap's input modules) |
| **Text Primary** | Wise Navy | `#37517e` | Headings, Token Symbols |
| **Text Secondary** | Gray / Muted Navy | `#5d6b82` | USD values, balance text |

## 2. Component Styles

### Swap Card Layout
The core of the interface.

*   **Container Width**: `460px` (Standard Uniswap width)
*   **Border Radius**: `24px` (Wise Card standard)
*   **Padding**: `12px` (Internal padding of the main card wrapper)
*   **Background**: `#FFFFFF`
*   **Shadow**: `0px 4px 24px rgba(0, 0, 0, 0.04)` (Subtle lift)

### Input Modules (Sell & Buy Cards)
The two main blocks for entering token amounts.

*   **Background**: `#F9FAFB` (Distinct from card white to create depth)
*   **Border Radius**: `16px`
*   **Padding**: `16px`
*   **Hover Effect**:
    *   Property: `background-color`
    *   Transition: `250ms ease`
    *   State: Darkens slightly to `#F3F5F6` on hover/focus.

### "The Cut" (Gap & spacing)
The intersection between the Sell and Buy inputs.

*   **Gap between Input Cards**: `4px`
    *   *Note*: This tight gap allows the switch arrow to visually bridge the two sections.
*   **Switch Button Overlay**:
    *   Positioned absolute or negative margin to sit exactly between the `4px` gap.
    *   **Padding**: `4px` (Border around the arrow button to mask the gap)

### Buttons
Styles strictly follow Wise's **Pill Shape** rule but fit Uniswap's layout.

#### Primary Action (Swap / Connect)
*   **Shape**: Pill (`border-radius: 9999px`)
*   **Background**: `#9fe870` (Wise Forest Green)
*   **Text Color**: `#163300` (Dark Forest)
*   **Typography**: `Inter`, Weight `600` (SemiBold), Size `20px`
*   **Height**: `56px` (Large, touch-friendly area)
*   **Hover Effect**:
    *   **Brightness**: `95%` (Slightly darker green) or `transform: scale(1.01)`
    *   **Transition**: `0.1s ease-in-out`

#### Token Selector Button
*   **Shape**: Pill (`border-radius: 9999px`)
*   **Background**: `#FFFFFF` (or Transparent with hover)
*   **Shadow**: `0px 2px 8px rgba(0,0,0,0.05)`
*   **Hover Effect**:
    *   Background becomes `#F2F5F7` (Wise Background color)
    *   Opacity: `0.8`

## 3. Typography
Using `Inter` as the Web Safe fallback for Wise Sans.

*   **Input Numbers**: `36px`, Weight `500`, Color `#37517e` (Navy)
*   **Labels**: `14px`, Weight `500`, Color `#5d6b82`

## 4. Implementation Details

### CSS Variables
```css
:root {
  /* Wise Colors */
  --wise-green: #9fe870;
  --wise-navy: #37517e;
  --wise-dark-forest: #163300;
  --wise-bg: #F2F5F7;
  
  /* Uniswap Layout Spec */
  --swap-card-padding: 12px;
  --input-module-gap: 4px;
  --input-radius: 16px;
  --card-radius: 24px;
}
```

### Layout Structure (React/HTML)
```jsx
<div className="swap-card" style={{ padding: 'var(--swap-card-padding)', borderRadius: 'var(--card-radius)' }}>
  <div className="input-sell" style={{ marginBottom: 'var(--input-module-gap)', borderRadius: 'var(--input-radius)' }}>
    {/* Sell Content */}
  </div>
  
  {/* The Switch Arrow (Centered over gap) */}
  <div className="switch-arrow-container">
    <button className="switch-arrow" />
  </div>

  <div className="input-buy" style={{ borderRadius: 'var(--input-radius)' }}>
    {/* Buy Content */}
  </div>
  
  <button className="action-button-primary">
    Swap
  </button>
</div>
```

