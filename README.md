Dribbble-inspired clinic design using Magic UI + shadcn/ui + Tailwind

What’s included
- Theme tokens integrated into Tailwind/shadcn (colors, radii, shadows, gradients)
- Magic UI primitives in src/components/magic-ui
  - ScrollProgress: top scroll indicator
  - RevealOnView: IntersectionObserver-based reveal
  - ParallaxContainer: subtle parallax on pointer move
  - ShimmerButton: gradient button with shimmer (reduced-motion safe)
  - HoverCardLift: glassy card that lifts on hover
  - Spotlight: radial spotlight gradient following pointer (reduced-motion aware)
  - GradientBlobs: blurred brand blobs background
  - WaveSeparator: curved section separators
  - BentoGrid/BentoCard: responsive bento layout with glassy cards
  - StickyCTA: floating sticky CTA at bottom after scroll

Demo
- Updated home page (src/app/page.tsx) showcases all primitives:
  - Hero with Spotlight + GradientBlobs + ParallaxContainer + ShimmerButton
  - Wave separators between sections
  - Bento grid of glassy cards using RevealOnView
  - FAQ (shadcn/ui)
  - Contact form with glass styling
  - Sticky floating CTA

Header/Nav
- Modern floating, blurred header with scroll-aware background
- Animated underline navigation links
- CTA in header using ShimmerButton

Accessibility and motion
- Respects prefers-reduced-motion via globals.css
- Minimal CLS: fixed heights for hero blocks and careful layout spacing

Run
- npm run dev to start Next.js
- npm run build for production build
