# Design System: Passkey Foundation

## Overview
This design system captures the aesthetic of the Passkey Foundation wallet interface, specifically focusing on the Light Mode experience as requested. It features a soft, pastel gradient background, rounded card aesthetics, and a mix of sans-serif and monospace typography.

## 1. Color Palette

### Backgrounds
- **Page Background (Gradient):**
  - Type: Linear Gradient (Top to Bottom)
  - Start Color (Top): `#FDFFCD` (Light Cream/Yellow)
  - End Color (Bottom): `#F6D5F7` (Light Pink/Lavender)
  - CSS: `background: linear-gradient(180deg, #FDFFCD 0%, #F6D5F7 100%);`

- **Surface Colors:**
  - **Card Background:** `#FFFFFF` (Pure White)
  - **Input/Section Background:** `#F3F4F6` (Light Grey)
  - **Pill Background (My Passkey):** `#FCE7F3` (Light Pink)

### Text Colors
- **Primary Text:** `#000000` (Black)
- **Secondary Text (Labels):** `#6B7280` (Cool Grey)
- **Amount/Value Text:** `#6B7280` (Cool Grey) - *Note: In the reference, the "0.00" is greyed out when empty.*

### Interactive Elements
- **Primary Button (Continue):**
  - **Background (Active):** `#000000` (Black) - *Inferred from inverse of dark mode.*
  - **Background (Disabled):** `#9CA3AF` (Grey) - *As seen in the reference image.*
  - **Text Color:** `#FFFFFF` (White)
- **Toggle/Settings Icons:**
  - **Color:** `#000000` (Black)

## 2. Typography

The design uses a distinct pairing of Sans-Serif for UI elements and Monospace for data/headings.

### Font Families
- **Primary (UI/Body):** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
  - Used for: "Continue", "My Passkey", "MIN", "HALF", "MAX"
- **Secondary (Data/Headers):** `Roboto Mono`, `Space Mono`, `monospace`
  - Used for: "I have 0 ETH", "I want BTC", "0.00"

### Font Weights
- **Regular:** 400 (Body text)
- **Medium/Semi-Bold:** 500/600 (Button text, Headers)

## 3. Spacing & Geometry

### Border Radius
- **Main Card:** `24px` - *Soft, friendly container.*
- **Input Groups/Sections:** `20px` - *Slightly less rounded than the main card.*
- **Primary Button:** `16px` - *Distinctly rounded but not fully pill-shaped.*
- **Pills (My Passkey):** `9999px` - *Full rounded caps.*

### Shadows
- **Card Shadow:** Soft, diffused shadow.
  - Estimate: `0 10px 30px -10px rgba(0,0,0,0.1)`

## 4. UI Components

### "My Passkey" Pill
- **Container:** Flexbox, centered items.
- **Background:** `#FCE7F3`
- **Padding:** `8px 16px`
- **Border Radius:** `9999px`
- **Icon:** Circle with 'P' logo.

### Swap Input Card
- **Structure:** Two vertical sections (Sell/Buy) separated by a switch button.
- **Background:** `#F3F4F6` (for the inner input container)
- **Padding:** `16px`

### Toggle Button (Theme/Settings)
- **Style:** Icon only, no background (or transparent).
- **Color:** Black.
