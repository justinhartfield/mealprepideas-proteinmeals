This Design System documentation is reverse-engineered from the provided HTML/CSS for **"The Meal Authority"**.

# Design System: The Meal Authority (Tactical Pantry)

## 1. Core Principles
The design system follows a **"Modern Organic Tactical"** aesthetic. It blends the structured, authoritative feel of a "system" with the warm, approachable nature of home cooking and nutrition.

*   **Tactile Depth**: Uses subtle grain textures and multi-layered shadows to move away from "flat" design toward a more physical, paper-and-countertop feel.
*   **Organic Professionalism**: A palette inspired by natural ingredients (Sage, Cream) paired with a high-authority typeface (Lexend).
*   **Systematic Clarity**: Focuses on "Systems" and "Authority," implying a disciplined approach to meal prep.

## 2. Color Palette

The palette is grounded in warm neutrals with muted natural tones and a high-energy accent for conversion.

| Name | Hex Code | Tailwind Equivalent (Approx) | Usage |
| :--- | :--- | :--- | :--- |
| **Pantry Cream** | `#F9F7F2` | `bg-[#F9F7F2]` | Primary Background |
| **Pantry Slate** | `#2D3436` | `text-[#2D3436]` | Primary Text, Headings |
| **Pantry Sage** | `#7E9680` | `bg-[#7E9680]` | Secondary Actions, Accents |
| **Pantry Accent** | `#E67E22` | `bg-[#E67E22]` | Focus CTAs, Burnt Orange |
| **Label Tape** | `#EFEFEF` | `bg-gray-100` | UI Elements, Dividers |
| **White** | `#FFFFFF` | `bg-white` | Card Backgrounds |

## 3. Typography

The system relies on a single, highly legible geometric sans-serif that scales well from technical data to bold headlines.

*   **Primary Font**: `Lexend`, sans-serif.
*   **Scale**:
    *   **Headlines**: Heavy weights (700-900) for "Authority."
    *   **Body**: Medium weights (400) for readability.
*   **Coloring**: Primarily `var(--pantry-slate)` for high contrast against the cream background.

## 4. Spacing & Layout

*   **Container**: Standard Tailwind container logic (implied).
*   **Flow**: Vertical flex layout (`flex-direction: column`) with smooth scrolling enabled.
*   **Texture**: A global **Grain Overlay** is applied via a fixed SVG filter at 4% opacity to provide a "paper" or "tactile" quality to the entire UI.

## 5. Components

### Pantry Card
The signature container for content.
*   **Background**: White.
*   **Border**: `1px solid rgba(0,0,0,0.08)` (Subtle definition).
*   **Shadow**: A "Tactical Depth" stack:
    *   `0 4px 0px rgba(0,0,0,0.02)` (Tight base)
    *   `0 15px 35px -5px rgba(0,0,0,0.05)` (Soft spread)
*   **Interaction**: Uses a custom `cubic-bezier(0.175, 0.885, 0.32, 1.275)` transition, suggesting a "springy" or "snappy" physical feel when hovered or active.

### Buttons (Inferred)
*   **Primary**: Likely `Pantry Sage` or `Pantry Accent` with rounded-md or rounded-lg corners to match the Lexend aesthetic.

## 6. Iconography
While specific icons aren't in the snippet, the "Tactical" and "Pantry" keywords suggest:
*   **Style**: Clean, medium-stroke line icons (e.g., Lucide, Phosphor Icons).
*   **Color**: Matching `Pantry Slate` or `Pantry Sage`.

---

## Reference HTML

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Meal Authority | Meal Prep & High Protein Systems</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet">
    <style>
        :root {
            --pantry-cream: #F9F7F2;
            --pantry-slate: #2D3436;
            --pantry-sage: #7E9680;
            --pantry-accent: #E67E22; /* Burnt Orange for focus */
            --label-tape: #EFEFEF;
        }

        body {
            font-family: 'Lexend', sans-serif;
            background-color: var(--pantry-cream);
            color: var(--pantry-slate);
            overflow-x: hidden;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* SVG Grain Overlay */
        .grain {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            z-index: 50;
            opacity: 0.04;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Tactical Depth Styling */
        .pantry-card {
            background: white;
            border: 1px solid rgba(0,0,0,0.08);
            box-shadow: 
                0 4px 0px rgba(0,0,0,0.02),
                0 15px 35px -5px rgba(0,0,0,0.05);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pantry-card
    </style>
</head>
```