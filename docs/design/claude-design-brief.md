# lookr-uppr Design Brief (Claude Design Handoff)

## 1) Product Goal
Help families quickly identify likely spam/scam calls and reduce nuisance calls with clear, fast, confidence-based guidance.

## 2) Primary Users
- Busy household members
- Non-technical users
- Older family members needing high-legibility UX

## 3) Core Outcomes
- Faster “should I answer?” decision
- Better spam blocking confidence over time
- One-tap lookup when a call is missed or suspicious

## 4) Platform Constraints (iOS)
- No custom controls directly inside Apple incoming-call UI
- Supported surfaces: app screens, widgets/shortcuts/action button, call directory capabilities

## 5) Key Flows to Design
1. Manual lookup (paste/type number) with instant risk result
2. Recent calls lookup flow (fast entry/import path)
3. Report spam / not spam feedback
4. Family-safe mode labels: Safe / Caution / Likely Spam
5. Setup flow: permissions, call identification, shortcut/action button setup

## 6) Information Architecture
- Home (search + recent lookups)
- Risk Result Details
- Reports/History
- Settings (family mode, privacy, data sources)

## 7) UX Requirements
- Very high legibility and large tap targets
- Low-friction input and quick repeat actions
- Explainable confidence labels (“why flagged”)
- Resilient states: empty/loading/error/no-data/partial-data
- Offline-friendly shell behavior where feasible

## 8) Design System Scope
- Risk color roles: safe/caution/spam/unknown
- Typography, spacing, radius, shadow, motion tokens
- Core components:
  - Number input
  - Risk badge
  - Confidence meter
  - Result card
  - Source chips
  - Primary/secondary CTA buttons
  - Toast/alert patterns
- Accessibility:
  - WCAG AA contrast
  - Color + text redundancy
  - Dynamic type-friendly scaling rules

## 9) Deliverables Requested
- Design principles and brand direction
- Token set (Figma + dev-friendly export)
- Component library (Figma-ready)
- Key screens for all required flows
- Full state coverage (empty/loading/error/no-data/partial-data)
- Clickable prototype for usability testing
- Handoff specs aligned to Vue 3 + TypeScript implementation

## 10) Engineering Handoff Requirements
- Component naming convention and usage notes
- Token mapping table (design token -> CSS variable)
- Interaction states + motion durations/easings
- Accessibility notes per component (contrast, focus, semantics)
- Redline-ready spacing and type specs
