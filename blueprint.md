# Project: Lotto Number Generator

## Overview
A sleek, modern web-based Lotto number generator featuring animated transitions, colorful number balls, and a responsive design. Now includes Dark Mode and Light Mode support.

## Features
- **Lotto Generation:** Randomly generates 6 unique numbers (1-45).
- **Sorted Display:** Numbers are automatically sorted in ascending order.
- **Dynamic Coloring:** Balls are colored based on their number range (Standard Korean Lotto style).
- **Animations:** Smooth "pop-in" animations with staggered delays.
- **Theme Support:** Dark and Light modes with persistent user preference via `localStorage`.
- **Modern UI:** Uses CSS variables, Flexbox, and responsive units.

## Implementation Details
- **HTML5:** Semantic structure with a dedicated container for generated numbers.
- **CSS3:** 
    - Custom properties (Variables) for easy theme management.
    - Transitions for smooth theme switching.
    - Keyframe animations for visual feedback.
    - Glassmorphism-inspired container design.
- **JavaScript (ES6):**
    - `Set` object for ensuring unique numbers.
    - DOM manipulation for dynamic element creation.
    - `localStorage` for theme persistence.
    - Event listeners for interactive elements.

## Future Plans
- Add number history or "save" functionality.
- Implement specialized generator modes (e.g., excluding certain numbers).
- Add sound effects for ball generation.
