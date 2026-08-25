# Mariana Veiga — Nutrição Clínica e Esportiva · Design System

Brand and UI system for **Mariana Veiga**, a clinical and sports nutrition practice ("clínica nutricional") in Brazil. Everything here is authored in **Brazilian Portuguese**, because that is the language of the practice and its patients.

## Sources given

| Source | What it gave us |
|---|---|
| `uploads/logo.png` (800×461 PNG, user-uploaded) | The only supplied asset: the full lockup — outlined apple with sage fill, a brush-stroke swoosh, "MARIANA VEIGA" in wide-tracked geometric caps, and the descriptor "NUTRIÇÃO CLÍNICA E ESPORTIVA". Both brand greens were sampled from its pixels. |
| Chat brief | Company: "Mari Nutri" · note: "Clinica nutricional". |

No codebase, Figma file, website, deck or photography was provided. **Everything beyond the logo (palette scale, type, components, screens, copy) is an original construction derived from the logo and the practice's category** — not a recreation of an existing product. Two consequences to keep in mind:

- **Type is a substitution.** The wordmark is set in a wide, light geometric sans (Futura / Century Gothic family). No font files were supplied, so the system uses **Jost** (Google Fonts) as the display face and **Manrope** for UI and body copy. → *If you have the real brand fonts, send the files and I'll swap them in and add proper `@font-face` rules.*
- **Iconography is a substitution.** No icon set was supplied, so the system standardises on **Lucide 0.544.0**, inlined through the `Icon` component (45 glyphs, also in `assets/icons/`).
- **No photography exists.** Every image slot in the UI kits is an honest dashed placeholder labelled with what belongs there.

## Products represented

1. **Site institucional** (`ui_kits/website/`) — marketing site: home, about, services + pricing, articles, booking.
2. **Área do paciente** (`ui_kits/app/`) — logged-in patient portal: dashboard, meal plan, food diary, progress, labs, messages, settings.

---

## CONTENT FUNDAMENTALS

**Language.** Brazilian Portuguese, always. Decimal comma and thousands point (`68,2 kg`, `1.980 kcal`). Times in the 24h Brazilian style (`09h30`), dates written out (`12 de setembro`).

**Person.** The clinic speaks as **"eu"** when Mariana speaks about her own practice ("Meu trabalho começa por entender sua rotina") and as **"nós"** for the process the patient goes through together with her ("montamos o plano a partir da sua rotina"). The patient is always **"você"** — never "o paciente", never the formal "senhor/senhora".

**Tone.** Warm, clinical, and plain-spoken. Grounded in evidence but never lecturing. It names real constraints — work schedules, budget, training load — instead of promising transformation. Reassurance comes from specificity, not from enthusiasm.

Say this:
- "Comer bem sem abrir mão da sua rotina."
- "Plano alimentar construído a partir dos seus exames, do seu treino e do que você gosta de comer."
- "O plano é um guia, não um contrato. Se um dia sair da rota, retome na próxima refeição."
- "Faltam 2 registros hoje. Anotar logo após a refeição deixa o diário mais fiel."

Never this:
- "Transforme seu corpo em 30 dias!" (promise + hype)
- "Alimentos proibidos" / "detox" / "dieta milagrosa" (moralising, unscientific)
- "Parabéns!!! 🎉 Você arrasou!" (exclamation stacking, emoji)

**Casing.** Sentence case everywhere — headings, buttons, labels. ALL CAPS is reserved for two things: eyebrows/kickers and the wordmark, both with wide tracking. Never all-caps a sentence.

**Buttons and labels.** Verb-first and concrete: "Agendar consulta", "Registrar refeição", "Baixar PDF", "Solicitar horário". Never "Enviar", "Clique aqui", "Saiba mais" alone (it may only pair with a topic).

**Numbers.** Clinical values get display type; units get muted body type. Deltas always carry a timeframe: "−1,4 kg em 30 dias", not "−1,4 kg".

**Emoji: no.** The brand mark itself is a piece of illustration; emoji would compete with it and cheapen the clinical register. Status is carried by Lucide glyphs and tinted badges.

---

## VISUAL FOUNDATIONS

**Palette.** Two colours come straight from the logo: **deep leaf `#005D42`** (`--green-700`) and **sage `#92CDB1`** (`--green-300`). Around them sits a ten-step green scale, plus **forest `#002E20`** (`--green-900`) for dark bands and the app sidebar. Neutrals are deliberately **warm** — `--neutral-50 #FBFAF7` paper, `--neutral-800 #26302B` ink with a green cast — because a cool grey next to these greens reads clinical-cold. Four "kitchen" accents (clay, citrus, berry, water) exist **only** for data series and food categories; they never become UI chrome. Max two background colours per layout: paper/white plus one green.

**Type.** Jost for display (300 for large headlines, 500 for headings; `letter-spacing:-.01em`), Manrope 400–700 for everything else at `1.65` line-height. Eyebrows are Jost 500 caps at `.18em` tracking; the wordmark treatment is `.14em`. Scale is a 1.25 ratio, 11 → 76px. Prose caps at `66ch`; headlines cap at `18–22ch` so they break into two or three lines.

**Spacing & layout.** 2px base scale; real rhythm lives on 8/12/16/24/32/48/64/80. Page gutters 24px mobile, 64px desktop; content maxes at 1200px, centred. Sections breathe: 96px vertical padding on marketing bands, 32px in app views. Cards stack their contents with 12–20px gaps. Layout is a flow of full-bleed horizontal bands — nothing is fixed or sticky except the app sidebar (248px, full height) and toasts (bottom-right, 24px inset).

**Backgrounds.** Flat colour only. Alternating paper (`#FFF`) → mist (`--green-50`) → forest (`--green-900`) bands give the page its rhythm. **No gradients** — not in backgrounds, not in buttons, not behind text. No repeating patterns, no noise, no textures. The one graphic accent is the logo's own apple or brush stroke, dropped in at a large size and brightened over dark green.

**Imagery (when it exists).** Warm, natural light; real food and real consultation moments; shallow depth of field; greens and terracottas in frame. Never cool-toned stock, never black & white, never grain filters, never plated-restaurant styling. Images are cropped to 24px-radius rectangles (or full-bleed within a band); portraits favour tall 3:4 frames.

**Corner radii.** 4px checkboxes, 8px small chips/tooltips, **12px form controls**, 16px default cards, 24px feature cards and image frames, 32px hero panels, and **pill (999px) for every button, badge, tag and avatar**. The pill/12px pairing is the brand's most recognisable shape signal: soft actions, calm inputs.

**Cards.** Hairline `1px var(--neutral-200)` border on white, 16px radius, 24px padding, **no shadow at rest**. Elevation is opt-in (`elevated`) and always green-tinted and soft. Five tones: paper, soft (mist), sage, deep (forest), sunken. Never a coloured left border as an accent device.

**Shadows.** Four steps, all `rgba(0,46,32,…)` — green-black, never neutral black: `xs` 1px hairline lift, `sm` 2/6, `md` 6/18 for floating cards and toasts, `lg` 18/40 for modals. Focus is a 3px `rgba(146,205,177,.55)` sage ring, never a browser-blue outline.

**Borders.** Hairlines do most of the work: `--neutral-200` for structure, `--neutral-300` on form controls, `--green-700` when focused or selected. Dividers inside cards and lists are 1px hairlines, never 2px rules.

**Transparency & blur.** Used in exactly two places: the modal scrim (`rgba(0,46,32,.42)` + `blur(3px)`) and the sidebar's active item (`rgba(146,205,177,.18)`). Text over a dark band relies on the band's own solid colour — no protection gradients, no glass cards.

**Motion.** Quick and calm: 120ms for hover and colour, 200ms for toggles/tabs/shadows, 320ms for bars and rings filling, 480ms for section reveals. Easing is `cubic-bezier(.22,1,.36,1)` (soft-out) for anything entering, `cubic-bezier(.2,.6,.2,1)` for state changes. **No bounce, no spring, no parallax, no scroll-jacking.** Fades and short vertical moves only.

**Hover states.** Filled buttons darken one step (`green-700 → green-800`) and gain `--shadow-md`; outline and ghost buttons fill with `--green-50`; cards marked `interactive` lift 1px and pick up a soft shadow; links darken and their sage underline turns deep green. Never opacity-fade a hover.

**Press states.** `scale(.985)` — a small compression, no colour change beyond the hover step, no ripple.

---

## ICONOGRAPHY

- **System: Lucide 0.544.0** (ISC), **inlined** in `components/core/Icon.jsx` and mirrored as files in `assets/icons/`. No CDN, no network at runtime — inline SVG is the only form that survives screenshot / PDF / PPTX export. This is a **flagged substitution** — no icon set came with the brief.
- Icons render as inline `<svg>` with `stroke={color}` (default `currentColor`). Always go through `<Icon name="…" />` rather than hand-rolling SVG; 45 glyphs are available.
- Sizes: 14 / 16 / 20 / 24 / 32. Stroke weight is Lucide's default 1.5px at 24px — never mix in filled or duotone glyphs.
- Colour: `--green-700` on light surfaces, `--green-300` on forest, `--neutral-400` for input affordances, semantic colour inside status chips only.
- Vocabulary in use: `apple, leaf, salad, clipboard-list, notebook-pen, flask-conical, scale, ruler, percent, droplet, flame, activity, heart-pulse, trending-down, calendar-days, calendar-check, clock, message-circle, video, map-pin, user-round, users-round, star, quote, check, plus, upload, download, repeat, eye, paperclip, send, bell, settings, house, info, target`.
- **No emoji.** No Unicode symbols as icons (no ✓ ✗ → in copy). The apple mark from the logo is the only illustration in the system; there are no other drawn graphics, and none should be invented.

### Assets (`assets/`)

| File | Use |
|---|---|
| `logo-full.png` | Original upload, white background. |
| `logo-full-transparent.png` | Full lockup, knocked-out background — default for light surfaces. |
| `logo-full-inverse.png` | White wordmark + sage apple — for forest-green surfaces. |
| `logo-mark.png` | Apple + brush stroke, no type. |
| `logo-apple.png` | Apple alone — app icon, favicon, avatar, large graphic accent. |
| `logo-wordmark.png` | "MARIANA VEIGA" + descriptor, no apple. |

Clear space: at least the apple's height on every side. Minimum lockup width 160px; below that, use `logo-apple.png`. Never recolour the mark outside the two supplied variants, never stretch it, never place the light version on mid-tone greens.

---

## INDEX

**Root**
- `styles.css` — the single entry point consumers link (imports only).
- `thumbnail.html` — homepage tile.
- `readme.md` (this file), `SKILL.md` — portable Agent Skill wrapper.

**`tokens/`** — `fonts.css` (Google Fonts import), `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `shadows.css`, `motion.css`, `semantic.css` (aliases), `base.css` (element resets, link colours).

**`guidelines/`** — 20 specimen cards feeding the Design System tab, grouped **Colors** (brand greens, green scale, warm neutrals, kitchen accents, status colors, surfaces), **Type** (display, body, scale, eyebrows, numerals), **Spacing** (scale, in use, radii, shadows, motion), **Brand** (primary logo, inverse logo, apple mark, iconography).

**`components/`** — 22 primitives, each with `.jsx`, `.d.ts` and `.prompt.md`:
- `core/` — **Button**, **IconButton**, **Icon**, **Card**, **Badge**, **Tag**
- `forms/` — **Field**, **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- `navigation/` — **SiteHeader**, **SideNav**, **Tabs**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**
- `data/` — **StatTile**, **MacroBar**, **ProgressRing**

**`ui_kits/`**
- `website/` — `index.html`, `Site.jsx`, `README.md`
- `app/` — `index.html`, `App.jsx`, `README.md`

### Intentional additions

No source defined a component inventory, so the set above is the standard primitive kit sized to this practice, plus three domain pieces the two products genuinely need:
- **StatTile** — clinical KPI (weight, adherence, calories) appears on every app screen.
- **MacroBar** — macro-vs-target bar; the core daily readout.
- **ProgressRing** — adherence/goal meter used in dashboard and progress views.
- **Icon** — wrapper over the substituted Lucide set, so a future icon swap is one file.
