# Design System: "Nothing" Aesthetic (Industrial Minimalist)

## 1. Core Philosophy
- **Raw & Technical:** The UI should feel like a technical schematic or a retro-digital display.
- **Monochromatic:** Use black and white almost exclusively. Color is reserved strictly for product images.
- **Typography Driven:** The visual hierarchy is established through font weights and the contrast between "Dot Matrix" and "Monospace" typefaces.
- **Glitch/Analog Texture:** Subtle noise or grain is acceptable in backgrounds.
- **Precision:** Sharp edges, minimal decoration, functional over decorative.

## 2. Typography

### A. Display / Heading / Logo (The "Dot" Look)
Used for: Logos, large headers, brand name, emphasis numbers.

**Primary Font:** `DotGothic16`
- **Google Font:** `DotGothic16` (Best match)
- **Alternative:** `Rubik Glitch` (if DotGothic16 unavailable)
- **CSS Class:** `font-dot`
- **Characteristics:** 
  - Uppercase always
  - Pixelated, grid-based appearance
  - Retro-digital display aesthetic
  - Letter spacing: `0.05em` to `0.1em`

**Usage Examples:**
- Brand logo: "NOTHING (R)"
- Main page headings
- Step titles: "SELECT PAIR", "ENTER ADDRESS"
- Modal titles: "ITEM ADDED", "YOU MIGHT LIKE"

### B. Body / UI / Buttons (The "Tech" Look)
Used for: Buttons, descriptions, prices, labels, product names, all UI text.

**Primary Font:** `IBM Plex Mono`
- **Google Font:** `IBM Plex Mono` (Best technical match)
- **Alternative:** `Roboto Mono` (fallback)
- **CSS Class:** `font-mono`
- **Characteristics:**
  - Clean, technical monospace
  - Distinct letter spacing: `0.02em` to `0.05em`
  - All button text is UPPERCASE
  - Consistent weight: 400 (regular) for body, 500-600 for buttons

**Usage Examples:**
- Product names: "Phone (3a) Lite, White, 8+256GB"
- Prices: "SGD 299"
- Button labels: "VIEW BAG", "CHECKOUT", "ADD TO BAG"
- Form labels and inputs
- All body text

#### Font Import Strategy
```html
<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap" rel="stylesheet">
```

#### CSS Implementation
```css
.font-dot {
  font-family: 'DotGothic16', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 400;
}

.font-mono {
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.02em;
  font-weight: 400;
}

.font-mono-bold {
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.02em;
  font-weight: 500;
}
```

## 3. Color Palette

### Primary Colors
- **Black:** `#000000` - Primary text, solid buttons, borders
- **White:** `#FFFFFF` - Backgrounds, text on black, outlined buttons
- **Product Colors:** Reserved exclusively for product imagery/photography

### Grayscale (Minimal Use)
- **Dark Gray:** `#1A1A1A` - Dark mode card backgrounds
- **Medium Gray:** `#333333` - Secondary text (light mode)
- **Light Gray:** `#666666` - Tertiary text
- **Very Light Gray:** `#CCCCCC` - Secondary text (dark mode)
- **Border Gray:** `#E5E5E5` - Subtle borders (light mode)

### Usage Rules
- **Light Mode:**
  - Background: `#FFFFFF`
  - Cards: `#FFFFFF`
  - Primary Text: `#000000`
  - Secondary Text: `#333333`
  - Borders: `#000000` or `#E5E5E5`
  - Buttons: Black (`#000000`) with white text, or white with black border

- **Dark Mode:**
  - Background: `#000000`
  - Cards: `#1A1A1A`
  - Primary Text: `#FFFFFF`
  - Secondary Text: `#CCCCCC`
  - Borders: `#FFFFFF` or `#333333`
  - Buttons: White (`#FFFFFF`) with black text, or black with white border

## 4. Border Radius

### Sharp Edges (Primary)
- **Buttons:** `0px` - All buttons have sharp, 90-degree corners
- **Cards:** `0px` - Primary card style
- **Inputs:** `0px` - Form inputs and text fields
- **Modals:** `0px` or minimal `2px-4px` (if absolutely necessary for modal container only)

### No Rounding
- No rounded corners on interactive elements
- No pill-shaped buttons
- No circular avatars (use square or sharp-edged shapes)

## 5. Layout Principles

### Grid System
- **Base Unit:** 8px
- **Scale:** 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Spacing:** Generous whitespace between sections (24px-48px)

### Structure
- **Asymmetric Balance:** Embrace negative space
- **Technical Precision:** Sharp edges, no rounded corners
- **Minimal Decoration:** No gradients, shadows, or effects except subtle texture/noise
- **Centered Content:** Modals and cards are typically centered
- **Full-Width Elements:** Buttons and inputs span full width of container

## 6. Component Guidelines

### Buttons

**Primary Button (Solid)**
- Background: `#000000` (light mode) or `#FFFFFF` (dark mode)
- Text: `#FFFFFF` (light mode) or `#000000` (dark mode)
- Font: `IBM Plex Mono`, uppercase, weight 500-600
- Border: None
- Border Radius: `0px`
- Padding: `16px 24px` (vertical, horizontal)
- Height: `48px` minimum
- Letter spacing: `0.02em`

**Secondary Button (Outlined)**
- Background: `#FFFFFF` (light mode) or `#000000` (dark mode)
- Text: `#000000` (light mode) or `#FFFFFF` (dark mode)
- Border: `1px solid #000000` (light mode) or `1px solid #FFFFFF` (dark mode)
- Border Radius: `0px`
- Padding: `16px 24px`
- Height: `48px` minimum

**Button States:**
- Hover: Simple opacity change (`opacity: 0.9`)
- Active: Inverted colors (white on black, black on white)
- Disabled: `opacity: 0.5`, `cursor: not-allowed`
- Focus: Minimal outline, maintain monochrome aesthetic

### Cards / Modals
- Background: `#FFFFFF` (light) or `#1A1A1A` (dark)
- Border: `1px solid #000000` (light) or `1px solid #FFFFFF` (dark)
- Border Radius: `0px`
- Padding: `24px`
- Shadow: None (flat design)

### Inputs / Forms
- Background: `#FFFFFF` (light) or `#000000` (dark)
- Border: `1px solid #000000` (light) or `1px solid #FFFFFF` (dark)
- Border Radius: `0px`
- Padding: `16px`
- Font: `IBM Plex Mono`, regular weight
- Focus: Border color change, no ring/shadow

### Typography Scale
- **H1 / Logo:** `46px` - DotGothic16, uppercase
- **H2 / Step Titles:** `19px-24px` - DotGothic16, uppercase
- **H3 / Section Headers:** `16px-20px` - IBM Plex Mono, uppercase
- **Body:** `14px-16px` - IBM Plex Mono, regular
- **Small Text:** `12px` - IBM Plex Mono, regular
- **Button Text:** `14px-16px` - IBM Plex Mono, uppercase, medium weight

## 7. Logo & Branding

### Logo Treatment
- **Text:** "NOTHING" or "NOTHING (R)"
- **Font:** DotGothic16
- **Case:** Always UPPERCASE
- **Size:** Variable, typically `46px` for main logo
- **Color:** `#000000` (light mode) or `#FFFFFF` (dark mode)
- **Letter Spacing:** `0.05em` to `0.1em`

### Logo Library
- Primary logo: Text-based "NOTHING" in DotGothic16
- Registered mark: "NOTHING (R)" when trademark required
- No icon-only logo (typography is the brand)

## 8. Texture & Effects

### Allowed
- **Noise/Grain:** Subtle background texture acceptable
- **Glitch Effects:** Minimal, used sparingly for emphasis (rare)
- **Flat Design:** No shadows, gradients, or depth effects

### Forbidden
- **Shadows:** No drop shadows or box shadows
- **Gradients:** Solid colors only
- **Rounded Corners:** Sharp edges only
- **Decorative Elements:** No icons, illustrations, or decorative graphics (except product images)

## 9. Spacing System

### Base Unit
- **8px** base unit for all spacing

### Scale
- **xs:** `4px` - Tight spacing
- **sm:** `8px` - Base spacing
- **md:** `16px` - Standard spacing
- **lg:** `24px` - Section spacing
- **xl:** `32px` - Large section spacing
- **2xl:** `48px` - Extra large spacing
- **3xl:** `64px` - Hero spacing

### Component Spacing
- **Card Padding:** `24px`
- **Button Padding:** `16px 24px`
- **Input Padding:** `16px`
- **Section Gap:** `24px-48px`
- **Element Gap:** `8px-16px`

## 10. Interaction States

### Hover
- Simple opacity change: `opacity: 0.9`
- No color changes
- No scale transforms
- Maintain monochrome aesthetic

### Active
- Inverted colors (white on black, black on white)
- Brief state, returns to hover

### Focus
- Minimal outline: `1px solid currentColor`
- No colored focus rings
- Maintain monochrome

### Disabled
- `opacity: 0.5`
- `cursor: not-allowed`
- No interaction

## 11. Modal / Overlay Patterns

### Modal Container
- Background overlay: Blurred, light gray (`rgba(0, 0, 0, 0.1)` or similar)
- Modal background: `#FFFFFF` (light) or `#1A1A1A` (dark)
- Border: `1px solid #000000` (light) or `1px solid #FFFFFF` (dark)
- Border Radius: `0px` or minimal `2px-4px` (container only)
- Padding: `24px`
- Centered on screen

### Modal Content
- Title: DotGothic16, uppercase, `24px`
- Body text: IBM Plex Mono, `14px-16px`
- Buttons: Full width, stacked vertically with `8px` gap
- Close button: Simple "X" in top-right corner

## 12. Product Display

### Product Cards
- Image: Product photo (only source of color)
- Name: IBM Plex Mono, uppercase, `14px`
- Variant: IBM Plex Mono, regular, `12px-14px`
- Price: IBM Plex Mono, medium weight, `14px-16px`
- Strikethrough: Original price with line-through
- Button: "ADD TO BAG" - Black button, white text, uppercase

### Product Grid
- Grid layout: 3 columns (desktop), 1-2 columns (mobile)
- Gap: `16px-24px` between cards
- Card: White background, black border, sharp corners

## 13. Implementation Checklist

### Typography
- [ ] Import DotGothic16 and IBM Plex Mono fonts
- [ ] Apply `.font-dot` to headings, logos, step titles
- [ ] Apply `.font-mono` to all body text, buttons, inputs
- [ ] Ensure all button text is uppercase
- [ ] Set appropriate letter spacing

### Colors
- [ ] Use only black and white for UI
- [ ] Reserve color for product images only
- [ ] Implement light/dark mode variants
- [ ] Use grays sparingly for hierarchy

### Borders & Radius
- [ ] Set all border-radius to `0px`
- [ ] Use `1px solid` borders
- [ ] Ensure sharp corners on all elements

### Components
- [ ] Buttons: Sharp corners, uppercase, mono font
- [ ] Inputs: Sharp corners, mono font, minimal styling
- [ ] Cards: Sharp corners, flat design, no shadows
- [ ] Modals: Sharp corners, centered, minimal overlay

### Spacing
- [ ] Use 8px base unit
- [ ] Apply consistent spacing scale
- [ ] Maintain generous whitespace

## 14. Example Code

### Button Component
```html
<button class="font-mono uppercase" style="
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 0px;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
">
  ADD TO BAG
</button>
```

### Card Component
```html
<div class="font-mono" style="
  background-color: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 0px;
  padding: 24px;
">
  <h3 class="font-dot uppercase" style="font-size: 24px; margin-bottom: 16px;">
    ITEM ADDED
  </h3>
  <p style="font-size: 14px; color: #333333;">
    Product details here
  </p>
</div>
```

### Input Component
```html
<input type="text" class="font-mono" style="
  background-color: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 0px;
  padding: 16px;
  font-size: 14px;
  width: 100%;
  outline: none;
">
```

## 15. Resources

### Fonts
- **DotGothic16:** https://fonts.google.com/specimen/DotGothic16
- **IBM Plex Mono:** https://fonts.google.com/specimen/IBM+Plex+Mono

### Brand Reference
- **Nothing Official Site:** https://sg.nothing.tech/
- **Product Page Example:** https://sg.nothing.tech/products/phone-3a-lite?Colour=White&Capacity=8%2B256GB

### Design Principles
- Monochromatic color scheme
- Typography-driven hierarchy
- Sharp, technical aesthetic
- Minimal decoration
- Functional over decorative

