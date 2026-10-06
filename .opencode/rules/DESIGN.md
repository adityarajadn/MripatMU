---
name: Solar Academic Telemetry
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#534434'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#867461'
  outline-variant: '#d8c3ad'
  surface-tint: '#855300'
  primary: '#855300'
  on-primary: '#ffffff'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#ffb95f'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#006591'
  on-tertiary: '#ffffff'
  tertiary-container: '#42bbff'
  on-tertiary-container: '#004869'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  amber-sun: '#f59e0b'
  amber-hover: '#d97706'
  amber-light: '#fef3c7'
  amber-subtle: '#fffbeb'
  charcoal-text: '#0f172a'
  slate-body: '#334155'
  slate-muted: '#64748b'
  surface-card: '#ffffff'
  surface-page: '#f8fafc'
  surface-subtle: '#f1f5f9'
  border-light: '#e2e8f0'
  border-hover: '#cbd5e1'
  status-present: '#10b981'
  status-present-bg: '#ecfdf5'
  status-pending: '#f59e0b'
  status-pending-bg: '#fffbeb'
  status-alert: '#ef4444'
  status-alert-bg: '#fef2f2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system reimagines smart school safety and IoT attendance monitoring through a warm, clear, and reassuring academic lens. Shifting away from cold militaristic surveillance aesthetics, it embraces an approachable yet precise atmosphere suitable for modern educational institutions, teachers, security staff, and school administrators.

The visual direction combines **Clean Modern Minimalism** with **Warm Civic Precision**:
- **Clarity & Openness:** Crisp white backgrounds, airy layouts, and luminous sunlight-inspired amber accents evoke optimism, safety, and vigilance without inducing cognitive fatigue or distress.
- **Academic Authority:** High-contrast charcoal and slate typography ensures effortless readability under bright daylight classroom or administrative office conditions.
- **Intelligent Feedback:** Clear color-coded behavioral statuses (attendance confirmed, pending exit permissions, unverified departures) turn complex computer vision pipelines into transparent, actionable insights.

## Colors

The palette centers on a welcoming, high-visibility harmony of bright amber-yellow, pristine whites, and deep slate typography, maintaining compliant contrast standards across all data tiers.

- **Primary (`#f59e0b` / School Amber):** Serves as the signature brand marker, highlighting active navigation links, focal key metrics, confirmation flows, and dynamic facial detection frames.
- **Secondary (`#10b981` / Presence Emerald):** Signifies confirmed attendance, verified student facial matches, active IoT sensor relays, and authorized entry corridors.
- **Tertiary (`#0ea5e9` / Insight Sky):** Applied to auxiliary IoT telemetry data, system sync indicators, and informational analytical graphs.
- **Neutral (`#0f172a` / Deep Slate Charcoal):** Provides grounding typography and iconography. Offsets against pure white (`#ffffff`) and cool page canvases (`#f8fafc` / `#f1f5f9`) for clean legibility without stark glare.

### Status Palette for Attendance & Movement
- **Present / Verified (`#10b981` with `#ecfdf5` badge base):** Normal biometric recognition and gate admission.
- **Pending / Teacher Permission (`#f59e0b` with `#fffbeb` badge base):** Out-of-class movement flagged for instructor approval or conditional hall passes.
- **Unauthorized Exit / Violation (`#ef4444` with `#fef2f2` badge base):** Immediate alert state for perimeter exits without valid digital permission slips.

## Typography

The design system exclusively utilizes **Plus Jakarta Sans**, harnessing its geometric clarity, friendly curves, and legibility across dense data displays.

### Hierarchy & Application Rules
- **Display & Section Titles:** Render in bold weights (`fontWeight: 700`) using slate charcoal (`#0f172a`) to firmly anchor operational views.
- **Body & Tabular Logs:** Keep weights balanced at `400` with muted slate tones (`#334155`) to maintain reading comfort during long periods of dashboard use.
- **Status & Metric Badges:** Utilize `label-md` or `label-sm` with semibold weighting (`600`) and slight letter spacing (`0.02em`) to ensure instant recognition at a glance.
- **Numbers & Counters:** Large attendance KPI summary figures adopt `headline-xl` in high-contrast charcoal with adjacent colored trend arrows.

## Layout & Spacing

The layout model is structured on a balanced **12-column responsive fluid grid**, tailored for modern widescreen school administrative dashboards while remaining adaptable across mobile inspection views.

### Structure & Density
- **Global Canvas:** Fixed or auto-collapsing left sidebar (260px) paired with a dynamic fluid workspace container.
- **Margins & Gutters:** Grid gutters are fixed at `1.25rem` (20px) to balance information density with clear visual breathing room. Outer margins scale from `1.5rem` (24px) on desktop to `1rem` (16px) on mobile.
- **Spatiotemporal Rhythm:** Internal card padding follows standard steps: `space-md` (16px) for compact telemetry feeds and table cells; `space-lg` (24px) for prominent overview cards and biometric inspection panes.

## Elevation & Depth

Visual depth is achieved through **clean tonal layering and luminous warm ambient drop shadows**, avoiding dark heavy drop-shadows or stark borders.

- **Canvas Base (Level 0):** Cool light-slate tone (`#f8fafc`). Serves as the background layer for dashboard navigation and grid tracks.
- **Card Tier (Level 1):** Solid crisp white (`#ffffff`) surfaces bound by fine low-contrast borders (`1px solid #e2e8f0`) and subtle diffuse shadows: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Elevated Interactive Tier (Level 2):** Floating drawers, metric tooltips, and hover states on cards: `0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`.
- **Focus & Selection Accent:** Highlighted cards or active biometric streams apply a radiant warm ambient halo: `0 0 0 2px #f59e0b, 0 4px 12px rgba(245, 158, 11, 0.15)`.

## Shapes

The design system adopts a **Rounded (`roundedness: 2`)** aesthetic, reinforcing an approachable, friendly, and contemporary campus environment.

- **Dashboard Cards & Camera Feeds:** Radiuses of `0.75rem` (12px) to `1rem` (16px) soften administrative metrics and live video viewports.
- **Form Controls & Action Buttons:** Use `0.5rem` (8px) for buttons and text inputs, preserving a crisp, interactive target area.
- **Pill Shapes (`rounded-full`):** Applied exclusively to status tags, category chips, presence indicators, and live timestamp containers for instant visual segmentation.

## Components

### Buttons
- **Primary:** Warm amber fill (`#f59e0b`) with crisp white or deep slate text (`#0f172a`), semibold weight. Hover shifts smoothly to rich amber (`#d97706`) with light elevation.
- **Secondary / Outline:** White surface with subtle slate border (`1px solid #e2e8f0`) and charcoal label. Hover activates `#f8fafc` surface and amber border tint.
- **Critical Action:** Light red tint fill (`#fef2f2`) with red text (`#ef4444`) and subtle border (`#fecaca`) for flagging violations or revoking access.

### Status Badges & Chips
- **Present / Verified:** Rounded full chip with `#ecfdf5` background, `#047857` text, and a vibrant `#10b981` leading pulse dot.
- **Pending Permission (Guru Memberi Izin):** Rounded full chip with `#fffbeb` background, `#b45309` text, and `#f59e0b` leading dot.
- **Unauthorized Exit (Keluar Tanpa Izin):** Rounded full chip with `#fef2f2` background, `#b91c1c` text, and `#ef4444` leading warning indicator.

### Attendance Telemetry Cards & AI Stream Feeds
- **Camera Feeds:** Clean rounded panels framed in white with high-contrast text overlays. AI recognition bounding boxes use amber (`#f59e0b`) tracking boxes with top-left student ID pills.
- **Flow Visualizer Cards:** White cards mapping the decision tree (Face ID $\rightarrow$ Teacher Permission $\rightarrow$ Verified Attendance vs. Unauthorized Alert) connected by amber and slate directional arrows.

### Data Tables
- Row height: 48px with soft dividing borders (`1px solid #f1f5f9`).
- Header row: Light neutral fill (`#f8fafc`) with uppercase muted slate typography (`label-sm`).
- Hover state: Row transitions to soft amber tint (`#fffdf7`) with a solid left amber border accent.

### Inputs & Search Bars
- Background of `#ffffff` with a clean `1px solid #e2e8f0` border, `0.5rem` border radius, and slate placeholder text.
- Focus state: Border transitions to `#f59e0b` with an amber shadow ring (`0 0 0 3px rgba(245, 158, 11, 0.15)`).