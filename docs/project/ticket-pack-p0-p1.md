# P0/P1 Ticket Pack (Ready to Paste)

## P0-1 Define spam risk taxonomy and confidence model
- **Type:** feature
- **Priority:** P0
- **Domain:** domain:scoring
- **Description:** Define canonical risk labels (Safe/Caution/Likely Spam/Unknown), confidence ranges, and explanation contract used by UI and data services.
- **Acceptance Criteria:**
  - Taxonomy documented with exact thresholds
  - Explanation payload schema defined
  - Example payloads for each risk class included
- **Dependencies:** none

## P0-2 Design system v1 tokens/components
- **Type:** feature
- **Priority:** P0
- **Domain:** domain:design-system
- **Description:** Produce v1 token set and baseline components for lookup-first flows with accessibility constraints.
- **Acceptance Criteria:**
  - Token primitives and semantic aliases defined
  - Core components designed with state variants
  - Accessibility checks (contrast + color/text redundancy) documented
- **Dependencies:** P0-1

## P0-3 Vue 2 -> Vue 3 + TypeScript migration scaffold
- **Type:** task
- **Priority:** P0
- **Domain:** domain:frontend
- **Description:** Scaffold migration foundation (tooling and app shell) for Vue 3 + TypeScript path.
- **Acceptance Criteria:**
  - Migration checklist approved
  - New app shell plan documented
  - Legacy/target parity checklist defined
- **Dependencies:** none

## P0-4 API provider abstraction (replace Whitepages lock-in)
- **Type:** feature
- **Priority:** P0
- **Domain:** domain:frontend
- **Description:** Define provider-agnostic lookup interface and response normalization contract.
- **Acceptance Criteria:**
  - Provider interface versioned and documented
  - Normalized lookup response schema defined
  - Error/empty/partial response behavior documented
- **Dependencies:** P0-1

## P1-1 Open-source data ingestion pipeline (initial sources)
- **Type:** feature
- **Priority:** P1
- **Domain:** domain:data-ingestion
- **Description:** Implement initial ingestion plan for open datasets and source quality scoring.
- **Acceptance Criteria:**
  - Source list and licensing review captured
  - Ingestion/update cadence defined
  - Data quality checks and confidence impact described
- **Dependencies:** P0-1, P0-4

## P1-2 Risk scoring service + explanation payload
- **Type:** feature
- **Priority:** P1
- **Domain:** domain:scoring
- **Description:** Create scoring service that outputs risk + confidence + explanation for UI consumption.
- **Acceptance Criteria:**
  - Service contract aligns with taxonomy
  - Explanation reasons are deterministic and user-readable
  - Fallback behavior for sparse data implemented
- **Dependencies:** P0-1, P0-4, P1-1

## P1-3 Manual lookup UX redesign + loading/error states
- **Type:** feature
- **Priority:** P1
- **Domain:** domain:frontend
- **Description:** Implement updated lookup flow with strong legibility and robust async states.
- **Acceptance Criteria:**
  - New lookup UI matches design tokens/components
  - Loading/error/no-data/partial-data states implemented
  - Accessibility checks pass for key screens
- **Dependencies:** P0-2, P1-2

## P1-4 Shortcut/Action Button quick-launch flow
- **Type:** feature
- **Priority:** P1
- **Domain:** domain:ios-integration
- **Description:** Provide fast launch into lookup workflow via iOS shortcut/action button path.
- **Acceptance Criteria:**
  - End-to-end quick-launch flow documented and testable
  - Number handoff path to app is defined
  - User setup instructions validated
- **Dependencies:** P1-3

## P1-5 Family mode UX + settings
- **Type:** feature
- **Priority:** P1
- **Domain:** domain:frontend
- **Description:** Add simple risk presentation mode for non-technical users.
- **Acceptance Criteria:**
  - Family mode toggle in settings
  - Simplified labels and copy implemented
  - Mode behavior covered in key flows
- **Dependencies:** P0-2, P1-3
