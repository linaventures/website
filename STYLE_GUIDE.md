# Linapage Visual Style Guide

## Overview
A minimal, content-focused design system emphasizing readability, whitespace, and clean typography. The design philosophy prioritizes substance over decoration, with careful attention to typographic hierarchy and generous spacing.

---

## Typography

### Primary Font
- **Font Family**: IBM Plex Sans
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif
- **Base Line Height**: 1.6

### Font Sizes & Hierarchy

#### Navigation & Logo (text-lg)
- **Size**: 18px / 1.125rem
- **Use**: Site name, navigation links, section headings
- **CSS**: `text-lg`

#### Body Text (Default)
- **Size**: 16px / 1rem 
- **Line Height**: 1.625 (leading-relaxed)
- **Use**: Main content, paragraphs, descriptions
- **CSS**: `leading-relaxed`

#### Emphasized Text
- **Weight**: Bold (font-bold)
- **Use**: Important phrases, project names, key terms
- **CSS**: `font-bold`

### Text Treatments
- **Italics**: Used for publication titles (`<em>`)
- **Bold**: Applied to key terms, project names, important phrases
- **Regular**: Default weight for body text and links

---

## Color Palette

### Primary Colors
- **Background**: `#FFFFFF` (Pure White)
- **Text**: `#000000` (Pure Black)
- **Links**: `#0000FF` (Pure Blue)

### Secondary Colors
- **Dividers**: `border-gray-300` (#D1D5DB)

### Color Usage
- **High Contrast**: Black text on white background for maximum readability
- **Single Accent**: Pure blue for all interactive elements and links
- **No Gradients**: Flat color approach throughout

---

## Layout & Spacing

### Content Width
- **Maximum Width**: 700px
- **Implementation**: `max-w-[700px] mx-auto`
- **Alignment**: Left-aligned content within centered container

### Padding & Margins

#### Page-Level Spacing
- **Horizontal Padding**: 
  - Mobile: 24px (`px-6`)
  - Desktop: 48px (`sm:px-12`)
- **Header Bottom Margin**: 
  - Mobile: 64px (`pb-16`)
  - Desktop: 80px (`sm:pb-20`)

#### Content Spacing
- **Section Margin**: 64px (`mb-16`)
- **Paragraph Margin**: 24px (`mb-6`)
- **List Item Margin**: 8px (`mb-2`)
- **Small Content Margin**: 16px (`mb-4`)

#### List Indentation
- **Bullet Points**: 16px left margin (`ml-4`)

---

## Interactive Elements

### Links
- **Color**: `#0000FF` (Pure Blue)
- **Hover State**: Underline (`hover:underline`)
- **Weight**: 
  - Regular: Default weight
  - Emphasized: Bold weight for important links
- **No Visited State Styling**: Links remain blue

### Hover Effects
- **Text Links**: Underline appears on hover
- **Writing Page Links**: Blue background with white text (`hover:bg-[#0000FF] hover:text-white`)

---

## Visual Language Principles

### Minimalism
- **Clean Layout**: No borders, boxes, or decorative elements
- **Generous Whitespace**: Ample spacing between sections and elements
- **Content Focus**: Typography and content take precedence over visual effects

### Typography Hierarchy
1. **Site Name**: Blue, 18px, used as logo/brand identifier
2. **Navigation**: Blue, 16px, clean link styling
3. **Section Headers**: Black, 18px, bold weight
4. **Body Text**: Black, 16px, regular weight with relaxed line height
5. **Emphasized Content**: Bold weight within body text
6. **Links**: Blue with underline on hover

### Responsive Approach
- **Mobile-First**: Design scales from mobile up
- **Navigation**: Stacks vertically on mobile, horizontal on desktop
- **Padding**: Increases on larger screens for better proportion
- **Typography**: Consistent sizing across breakpoints

### Content Organization
- **Scannable Structure**: Clear paragraph breaks and section divisions
- **Logical Flow**: Information organized in chronological/thematic order
- **Visual Breathing Room**: Strategic use of whitespace for readability

---

## Implementation Guidelines

### CSS Classes (TailwindCSS)
```css
/* Layout */
.page-container { @apply min-h-screen bg-white font-sans text-black; }
.content-wrapper { @apply max-w-[700px] mx-auto text-left; }
.main-padding { @apply px-6 sm:px-12; }

/* Typography */
.heading-lg { @apply text-lg font-bold text-black; }
.body-text { @apply leading-relaxed mb-6; }
.link-primary { @apply text-[#0000FF] hover:underline; }
.link-emphasized { @apply text-[#0000FF] hover:underline font-bold; }

/* Spacing */
.section-margin { @apply mb-16; }
.paragraph-margin { @apply mb-6; }
.header-spacing { @apply pb-16 sm:pb-20; }
```

### Writing Page Specific Styles
- **Date Format**: dd/mm/yyyy in regular weight
- **Title Links**: No underline, blue background on hover
- **Font Size**: Larger than default (`text-lg`) for better readability
- **Spacing**: Increased vertical spacing (`space-y-5`)

---

## Brand Voice Alignment
The visual design supports a tone that is:
- **Professional but approachable**
- **Content-focused and substantial** 
- **Clean and uncluttered**
- **Modern without being trendy**
- **Accessible and readable**

This style guide ensures consistency across all pages while maintaining the minimalist, content-first philosophy that defines the Linapage brand aesthetic.
