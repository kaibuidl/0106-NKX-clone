# CoinEx Design System

Based on the analysis of `coinex.com`.

## 1. Brand Identity & Colors

CoinEx uses a distinctive teal/green as its primary brand color, conveying trust and growth.

### Core Colors
| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#0EAD98` | Brand color, Primary Actions, "Buy" buttons |
| `primary-hover` | `#0B8F7D` | Hover state for primary actions |
| `secondary` | `#FFFFFF` | Backgrounds (Light Mode) |
| `text-primary` | `#1F2937` | Main headings, body text (Dark Gray) |
| `text-secondary` | `#6B7280` | Subtitles, captions (Gray) |
| `danger` | `#EF4444` | "Sell" buttons, Errors |
| `success` | `#0EAD98` | Success states, Positive trends |
| `background` | `#F9FAFB` | Page background |
| `surface` | `#FFFFFF` | Card background |

## 2. Typography

Clean, modern sans-serif typography.

- **Font Family**: `Manrope`, `Inter`, or system sans-serif (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...`).
- **Base Size**: `16px`.

### Headings
- **H1**: 32px / 40px (Bold/700)
- **H2**: 24px / 32px (Bold/700)
- **H3**: 20px / 28px (SemiBold/600)
- **H4**: 16px / 24px (SemiBold/600)

### Body
- **Body 1**: 16px / 24px (Regular/400)
- **Body 2**: 14px / 20px (Regular/400)
- **Caption**: 12px / 16px (Medium/500)

## 3. Layout & Spacing

### Grid System
- **Container**: `max-width: 1200px`, centered.
- **Gutter**: `24px` (1.5rem).

### Spacing Scale
| Token | Value |
|-------|-------|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `2xl` | 48px |
| `3xl` | 64px |

## 4. Components

### Buttons

Buttons are rectangular with slightly rounded corners.

**Primary Button**
- **Background**: `#0EAD98`
- **Text**: `#FFFFFF`
- **Border Radius**: `4px`
- **Padding**: `10px 24px` (Height ~44px)
- **Font**: 14px/16px SemiBold
- **Hover**: Darken to `#0B8F7D`, Transition `0.2s ease`

**Secondary / Outline Button**
- **Background**: Transparent
- **Border**: `1px solid #E5E7EB`
- **Text**: `#1F2937`
- **Border Radius**: `4px`
- **Hover**: Border `#0EAD98`, Text `#0EAD98`

### Cards

Clean cards with subtle borders or very soft shadows.

- **Background**: `#FFFFFF`
- **Border Radius**: `8px`
- **Border**: `1px solid #F3F4F6` (Light Gray)
- **Shadow**: `0 4px 6px -1px rgba(0, 0, 0, 0.05)` (Optional, often flat)
- **Padding**: `24px`

### Inputs

- **Height**: `44px`
- **Background**: `#F9FAFB`
- **Border**: `1px solid #E5E7EB`
- **Border Radius**: `4px`
- **Focus**: Border Color `#0EAD98`, Ring `2px solid rgba(14, 173, 152, 0.2)`

## 5. Visual Style

### Border Radius
- **Small**: `4px` (Buttons, Inputs, Tags)
- **Medium**: `8px` (Cards, Modals, Dropdowns)
- **Large**: `16px` (Large promotional banners)

### Shadows
- **Soft**: `0 2px 4px rgba(0,0,0,0.05)`
- **Hover**: `0 10px 15px rgba(0,0,0,0.1)`

## 6. Implementation Notes

- **Tailwind Config**: Extend colors with `coinex-green: '#0EAD98'`.
- **Icons**: Use outline icons (like Heroicons or Phosphor) with `1.5px` stroke.

