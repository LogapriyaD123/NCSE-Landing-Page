# NCSE Landing Page - AI Builder Context

Use this document as the working context for improving or rebuilding the NCSE landing page. The project is a React + Vite + Tailwind site for a student computing association. The current experience is already structured as a multi-page web app with routing, animated sections, batch-filtered event and board pages, contact form validation, and a dark glassmorphism visual style.

## Product Goal

Build a polished, modern landing website for NCSE, a student association focused on computing, technology, events, innovation, and community. The site should feel like a serious college technical association: energetic, premium, trustworthy, and student-led.

The site should help visitors quickly understand:

- What NCSE is and what it stands for.
- What events NCSE runs.
- Who leads the association.
- How the association has grown over time.
- How students, collaborators, or visitors can contact or join NCSE.

## Current Tech Stack

- React 19 app built with Vite.
- React Router for routes.
- Tailwind CSS via `@import "tailwindcss"` and `@theme` tokens in `src/index.css`.
- Framer Motion for page, card, tab, carousel, and hover animations.
- Lucide React for icons.
- Data is currently static and split across focused files in `src/data/`, with `src/data/index.js` acting as the barrel export.

## Project File Map

- `index.html`: Vite HTML entry point. Uses `/favicon.svg`, root div, and loads `/src/main.jsx`.
- `package.json`: Project scripts and dependencies.
- `package-lock.json`: Locked dependency tree for the current npm install.
- `vite.config.js`: Vite config with React plugin.
- `postcss.config.js`: PostCSS config using Tailwind CSS and autoprefixer.
- `tailwind.config.js`: Tailwind content paths and extended color tokens.
- `eslint.config.js`: ESLint flat config for JS/JSX, React Hooks, and React Refresh.
- `.gitignore`: Ignores logs, node_modules, dist outputs, editor folders, local env files, and Vercel folder.
- `.codex`: Empty file currently.
- `README.md`: Default React + Vite template README, not yet customized for NCSE.
- `public/favicon.svg`: Purple/blue lightning-style favicon SVG.
- `public/icons.svg`: SVG symbol sprite with social/documentation icons. Currently not imported by the React app.
- `public/images/inauguration_moment_1773842356873.png`: 1024 x 1024 image used for inauguration and some board photos.
- `public/images/tech_conference_hall_1773842391237.png`: 1024 x 1024 image used for tech conference/event visuals.
- `public/images/student_coding_event_1773842375785.png`: 1024 x 1024 image used for coding event visuals and some board photos.
- `src/main.jsx`: React entry. Mounts app inside `StrictMode` and wraps it in `BrowserRouter`.
- `src/App.jsx`: Main app shell. Adds navbar, footer, scroll-to-top behavior, and all routes.
- `src/index.css`: Global Tailwind import, design tokens, base typography, utility component classes, container, nav link, glass, buttons, and section spacing.
- `src/data/index.js`: Barrel file that re-exports all data modules so app imports can stay simple.
- `src/data/associationInfo.js`: Association identity, college/department details, mission, counts, and social links.
- `src/data/galleryImages.js`: Inauguration and past event carousel images with captions.
- `src/data/events.js`: Batch-grouped event data, categories, statuses, descriptions, and images.
- `src/data/boardMembers.js`: Batch-grouped board member profiles, roles, bios, photos, and socials.
- `src/components/Navbar.jsx`: Fixed responsive navbar with scroll styling, mobile drawer, links, and Join Us button.
- `src/components/Footer.jsx`: Footer with association summary, quick links, social links, and copyright.
- `src/components/Hero.jsx`: Home hero section with large centered title, tagline, CTAs, radial background gradients, and motion entry.
- `src/components/CarouselSection.jsx`: Image carousel component for homepage event/inauguration sections.
- `src/components/BatchTabs.jsx`: Reusable animated horizontal batch selector for Events and Board pages.
- `src/pages/Home.jsx`: Home page composition using Hero and two CarouselSection blocks.
- `src/pages/About.jsx`: About page with hero intro, mission/vision cards, animated stats, timeline, and CTA.
- `src/pages/Events.jsx`: Events listing with batch tabs and animated event cards.
- `src/pages/Board.jsx`: Board member listing with batch tabs and animated member cards.
- `src/pages/Contact.jsx`: Contact info column plus validated contact form and success state.

## App Structure And Routing

The app shell in `src/App.jsx` has a fixed layout:

- Root div uses `flex flex-col min-h-screen bg-slate-950`.
- `Navbar` stays fixed at the top.
- `<main>` grows to fill available height.
- `Footer` appears after routed content.
- `ScrollToTop` calls `window.scrollTo(0, 0)` whenever the route path changes.

Routes:

- `/` renders `Home`.
- `/events` renders `Events`.
- `/board` renders `Board`.
- `/about` renders `About`.
- `/contact` renders `Contact`.

## Current Visual Direction

The current design is a futuristic dark tech association website. It relies on:

- Deep slate background: `#020617`, `bg-slate-950`.
- Cards and panels: translucent dark surfaces with `bg-white/5`, `bg-card/70`, borders, and backdrop blur.
- Brand colors: electric blue, purple, and amber accent.
- Gradients: blue to purple text and button gradients.
- Motion: fade, slide, scale, staggered card entry, animated tabs, carousel transitions.
- Shapes: rounded pills, rounded cards, circular icon containers, circular board images.
- Imagery: square 1024 images for inauguration, conference halls, and coding events.

The site should remain high-tech and student-community focused, but the design should be made more detailed, intentional, and brand-specific.

## Design System Details

### Colors

Current tokens exist in both `tailwind.config.js` and `src/index.css`:

- `primary`: `#3b82f6`
- `primary-hover`: `#2563eb`
- `secondary`: `#8b5cf6`
- `accent`: `#f59e0b`
- `background`: `#020617`
- `foreground`: `#f8fafc`
- `card`: `#0f172a`
- `border`: `#1e293b`

Recommended refinement:

- Keep dark slate as the foundation, but add more contrast through near-black bands, slightly lighter panels, and controlled accent highlights.
- Use blue as the main technical/action color.
- Use purple as a secondary energy color, mostly in gradients, hover states, or section accents.
- Use amber sparingly for achievements, highlights, dates, or badges.
- Avoid making every section the same blue/purple gradient. Introduce neutral hierarchy, subtle dividers, and section-specific visual motifs.

### Typography

Current global typography in `src/index.css`:

- Body font: Inter fallback stack, but Inter is not imported from a font provider.
- `h1`: very large, bold, tight tracking.
- `h2`: large, bold, with bottom margin.
- `p`: slate gray, large text.

Recommended refinement:

- Import or define a real font source if production-ready polish is needed.
- Keep hero typography large, but use smaller and denser headings inside cards/forms.
- Use text hierarchy consistently:
  - Hero title: biggest, brand-first.
  - Page headings: strong but not oversized.
  - Section headings: clear and compact.
  - Card titles: readable, not decorative.
  - Body copy: lower contrast than titles, strong line height.
- Avoid negative letter spacing beyond Tailwind defaults unless necessary.

### Spacing And Layout

Current global layout helpers:

- `.container`: `max-w-7xl mx-auto px-6`.
- `section`: `py-24 md:py-32`.
- Most pages use `pt-32 pb-20` to account for fixed navbar.

Recommended refinement:

- Keep generous vertical rhythm, but avoid sections feeling empty.
- Use clear content bands: hero, proof/stats, events preview, about/mission, board preview, contact CTA.
- Maintain predictable max widths:
  - Text blocks: about `max-w-2xl` or `max-w-3xl`.
  - Content grids: `max-w-6xl` or `max-w-7xl`.
  - Carousel/media: `max-w-5xl`.
- Make mobile layouts feel designed, not just stacked. Give cards enough breathing room and keep controls thumb-friendly.

### Buttons

Current reusable classes:

- `.btn`: inline flex, centered, padded, semibold, rounded-full, animated.
- `.btn-primary`: blue-to-purple gradient, white text, glow hover, slight lift.
- `.btn-secondary`: transparent dark button with border and hover background.

Recommended refinement:

- Primary CTA should be visually dominant and used sparingly.
- Secondary actions should be calmer and more outline-like.
- Make all buttons either actual navigation links or wire them to real actions.
- Add icons only where they clarify action: join, send, explore, view board.

### Cards And Glass

Current `.glass` class:

- `bg-card/70 backdrop-blur-xl border border-white/10`.

Current pages also add combinations of:

- `bg-white/5`
- `backdrop-blur-md`
- `border-white/10`
- `rounded-2xl` and `rounded-3xl`
- hover border changes
- hover translate effects

Recommended refinement:

- Use glass panels consistently, but avoid overusing floating card effects on every section.
- Repeated item cards are appropriate for events, board members, stats, contact methods, and timeline nodes.
- Page sections themselves should feel like full-width bands or clean layouts rather than nested cards.
- Add subtle inner structure to cards: metadata rows, badges, role chips, image overlays, action footers.

### Motion

Current motion patterns:

- Hero fades/slides upward.
- Navbar mobile menu animates height and opacity.
- Carousel image transitions with opacity and scale.
- Event and board grids stagger items.
- About stats count up when in view.
- Timeline nodes slide in from alternating sides.
- Buttons and social links scale on hover/tap.

Recommended refinement:

- Keep animation fast and purposeful.
- Prefer opacity plus small y movement for content reveal.
- Use staggered reveals on grids, not on every small element.
- Ensure reduced-motion support if accessibility polish is added.
- Avoid large layout-shifting animations.

## Page-Level Context

### Home Page

File: `src/pages/Home.jsx`

Current content:

- Hero.
- Inauguration carousel.
- Past events carousel.

Current issue/opportunity:

- The hero still uses placeholders: "Association Name" and "College Name".
- CTAs in `Hero.jsx` are buttons, not route links.
- Home page could use more storytelling before the carousels.

Recommended home layout:

- First viewport: real NCSE identity, college context, short mission, two CTAs.
- Add a credibility strip: founded year, members, events, current batch.
- Add "What NCSE does" feature row: workshops, hackathons, mentorship, project culture.
- Keep inauguration carousel, but add context and captions that describe the moment.
- Keep past events carousel, but make it feel like a gallery of real community activity.
- Consider a preview of upcoming/current events and board members if the home page needs richer content.

### Hero Component

File: `src/components/Hero.jsx`

Current design:

- Full-screen centered hero.
- Blue and purple blurred radial decorations.
- Pill label "Welcome to NCSE".
- Gradient title, placeholder association/college text.
- Tagline.
- Explore Events and Learn More buttons.

Recommended changes:

- Replace placeholders with real content:
  - H1 should lead with "NCSE" or the full association name.
  - Supporting line can include college/department name.
- Use a real image, event collage, or immersive campus/tech visual in the first viewport if visual impact is important.
- Convert CTA buttons to `Link` components:
  - Explore Events -> `/events`
  - Learn More -> `/about`
- Add small trust indicators under CTAs: "200+ members", "12+ events", "Founded 2021".
- If keeping decorative blurred backgrounds, make them subtle and balanced with actual content or imagery.

### Events Page

File: `src/pages/Events.jsx`

Current content:

- Page title and subtitle.
- BatchTabs selector.
- Animated grid of event cards.
- Event cards show image, date, title, description, and a Read more button.

Current data source:

- `src/data/events.js` -> `events`, re-exported from `src/data/index.js`.

Recommended design improvements:

- Add event category badges: Hackathon, Workshop, Summit, Ceremony.
- Add event status: Upcoming, Completed, Featured.
- Add attendance or outcome details where possible.
- Add richer card footer: "View gallery", "Read recap", or "Register" based on event status.
- Improve empty state with a helpful message and contact/join CTA.
- Use image overlays more intentionally: date badge on image, category chip, subtle gradient.

### Board Page

File: `src/pages/Board.jsx`

Current content:

- Page title and subtitle.
- BatchTabs selector.
- Animated board member grid.
- Member cards show circular photo, name, role, and social icons.

Current data source:

- `src/data/boardMembers.js` -> `boardMembers`, re-exported from `src/data/index.js`.

Recommended design improvements:

- Add role hierarchy or grouping: Core Leads, Technical Wing, Creative/Media, Events, Outreach.
- Add short bios or contribution tags per member.
- Use consistent portrait assets instead of event photos when real portraits are available.
- Add a current board highlight section for President/Vice President if hierarchy matters.
- Make social links accessible with labels.
- Keep cards compact and consistent in height.

### About Page

File: `src/pages/About.jsx`

Current content:

- About hero with tagline.
- Mission and Vision cards.
- Animated stats.
- Timeline.
- CTA to events and board.

Current design:

- Strongest page structurally.
- Good storytelling foundation with timeline and stats.
- Uses icons from Lucide: Target, Lightbulb, Users, Calendar, Award, Rocket. Note: some imported icons may not currently be used.

Recommended design improvements:

- Add a values section: Build, Learn, Lead, Share.
- Make stats more grounded with labels that match real NCSE data.
- Improve timeline with richer milestones and dates if available.
- Add campus/community language so it feels less generic.
- Reduce repeated glass-card look by alternating content layouts.
- Make the CTA action clear: join, attend, collaborate, or meet leadership.

### Contact Page

File: `src/pages/Contact.jsx`

Current content:

- Page title and subtitle.
- Contact info cards: email, LinkedIn, GitHub, location.
- Contact form with validation.
- Subject dropdown.
- Success state after simulated submit.

Current behavior:

- Form validates name, email, and message.
- Submit only simulates an API call using `setTimeout`.
- Success message appears after 800ms.

Recommended design improvements:

- Make the form destination real if possible: backend endpoint, email service, or mailto fallback.
- Add helper text for response time or membership queries.
- Improve field labels and placeholders to fit student association context.
- Add accessible labels and `aria-invalid` for validation.
- Consider adding "Join as member", "Event collaboration", and "Sponsorship" as clearer subject options.
- Keep success state visually distinct and optimistic.

## Component-Level Context

### Navbar

File: `src/components/Navbar.jsx`

Current behavior:

- Fixed top nav.
- Transparent when at top.
- Becomes glassy with border and shadow after scrolling more than 20px.
- Desktop links show inline.
- Mobile uses Menu/X icons and animated dropdown.
- Active route styling uses `NavLink`.

Recommended design improvements:

- Make "Join Us" navigate somewhere useful, probably `/contact` or a membership form.
- Add `aria-label` to mobile menu button.
- Consider closing mobile menu on route changes.
- Make NCSE logo use favicon/mark plus text if branding is available.
- Keep nav height predictable so it does not feel jumpy when scrolled.

### Footer

File: `src/components/Footer.jsx`

Current content:

- NCSE name, mission, founded year.
- Quick links.
- Social icons.
- Dynamic current year.
- Design credit line.

Recommended design improvements:

- Replace generic/social placeholder URLs with real NCSE links.
- Add college/department name and location if known.
- Add contact email visibly.
- Use consistent icon hover states.
- Avoid overly sentimental copy if the page needs a more institutional tone.

### CarouselSection

File: `src/components/CarouselSection.jsx`

Current behavior:

- Controlled image index.
- Next/previous buttons on desktop.
- Dots below.
- Framer Motion image transition.
- Image set as CSS background.
- Overlay displays "Moment #N".

Recommended design improvements:

- Add actual captions from data instead of generic "Moment #N".
- Show controls on mobile or support swipe.
- Add `aria-label`s to controls and dots.
- Use `img` tags if SEO/accessibility for images matters.
- Keep image framing consistent. Current source images are square, while carousel frame is wide, so important content may crop.

### BatchTabs

File: `src/components/BatchTabs.jsx`

Current behavior:

- Horizontal scrollable tab list.
- Animated active indicator with Framer Motion `layoutId`.
- Used by Events and Board.

Recommended design improvements:

- Add accessible tab semantics if needed.
- Add visual distinction for current batch, such as "Current" badge.
- Hide scrollbar with a real `.no-scrollbar` utility or remove class if not implemented.

## Data Model Context

Files: `src/data/associationInfo.js`, `src/data/galleryImages.js`, `src/data/events.js`, `src/data/boardMembers.js`, and the barrel `src/data/index.js`

Current exports:

- `inauguralImages`: array of image paths for home inauguration carousel.
- `pastEventImages`: array of image paths for home past events carousel.
- `associationInfo`: name, tagline, mission, founded year, socials.
- `events`: grouped by academic batch, each with event id/title/date/description/images.
- `boardMembers`: grouped by academic batch, each with member id/name/role/photo/socials.

Recommended data improvements:

- Add full association name and college name.
- Add event categories, status, location, organizer, registration URL, recap URL, and gallery captions.
- Add board member bio, wing/team, priority/order, and real portrait.
- Replace placeholder socials with real URLs.
- Keep data centralized so pages remain simple.

## Asset Context

Public assets:

- Favicon is a purple/blue lightning-like SVG mark. It could become part of the logo system.
- `public/icons.svg` contains reusable SVG symbols, but the app currently uses Lucide icons instead.
- Three image files are 1024 x 1024 and currently reported as JPEG image data despite `.png` file extensions. They still load as image paths, but extension/content mismatch should be cleaned up for production.

Recommended asset direction:

- Use real NCSE photos for events and board members.
- If real photos are not ready, generate consistent, high-quality visuals in the same art direction.
- Keep event imagery bright enough to read under dark overlays.
- For board members, avoid reusing event/gallery images as portraits.
- Add meaningful alt text if converting CSS background images to `img`.

## Known Design Gaps To Fix

- Hero uses placeholder text.
- Home page could use more detail before the carousels.
- CTAs are buttons without navigation in the hero and navbar.
- Some data values and social links are placeholders.
- Image captions are generic.
- README is still the default Vite template.
- `.no-scrollbar` is referenced but no utility is defined in `src/index.css`.
- Package uses Tailwind CSS 4 style import plus a Tailwind config file. Keep token definitions consistent.
- `npm` was not available in the current shell, so build/lint could not be verified here.

## AI Builder Direction

When using an AI builder, ask it to preserve the current architecture and improve the experience rather than starting from a generic landing page. It should keep the multi-page app, routing, data-driven pages, and reusable components.

Suggested AI-builder prompt:

```text
You are improving an existing React + Vite + Tailwind website for NCSE, a college computing student association. Preserve the current routes, component structure, and data-driven approach. Make the design richer, more detailed, and more institution-ready while keeping a dark modern technical style.

The current app has these routes: Home, Events, Board, About, and Contact. It uses React Router, Framer Motion, Lucide icons, Tailwind CSS, and static data split across src/data modules, re-exported from src/data/index.js. The design foundation is deep slate background, glass panels, blue/purple gradient accents, responsive grids, animated tabs, image carousels, and polished card interactions.

Focus heavily on design and style:
- Replace placeholder hero text with a strong NCSE identity and college/department context.
- Make the home page more complete with a stats strip, "what we do" section, event highlights, and stronger CTAs.
- Keep the visual tone premium, futuristic, student-led, and technical.
- Use consistent spacing, hierarchy, card treatments, and motion.
- Avoid making every section look identical. Use full-width bands, clean content layouts, rich image areas, and restrained glass cards for repeated items.
- Keep the dark palette but add contrast through neutral surfaces, subtle dividers, and selective accent colors.
- Make mobile layouts intentionally designed, with readable text, stable button sizes, and no overlaps.
- Convert non-functional buttons into real links or actions where possible.
- Improve accessibility with clear labels, alt text, aria labels for icon buttons, and form validation states.

Page goals:
- Home: first impression, identity, mission, stats, event/gallery previews, join/explore CTAs.
- Events: batch tabs, event cards, categories/statuses, useful card actions, stronger image overlays.
- Board: batch tabs, leadership cards, social links, role hierarchy, optional member bios.
- About: mission, vision, values, stats, timeline, CTA.
- Contact: contact cards, validated form, clear subject options, success state, real submission plan if possible.

Keep using the existing data file, but expand the data model if needed for categories, captions, bios, tags, links, and statuses. Do not remove existing routes. Do not replace the app with a marketing-only hero page. Build the actual usable site experience.
```

## Implementation Priorities

1. Replace all placeholder content with real NCSE and college details.
2. Strengthen the focused files in `src/data/` so pages can render richer content while keeping exports available from `src/data/index.js`.
3. Upgrade `Hero.jsx` and `Home.jsx` first because they define first impression.
4. Improve `CarouselSection.jsx` with real captions and better mobile controls.
5. Refine event and board cards with badges, consistent heights, and better metadata.
6. Add accessibility details to nav, carousel controls, tabs, social links, and form fields.
7. Update `README.md` so it documents this NCSE project instead of the Vite template.
8. Run build and lint in an environment where npm is available.
