---
name: add-person
description: Add a new member to src/pages/_persons/ or a deceased entry to src/pages/_deceased/. Use whenever the user asks to add, remove, or rename a Schütze, Vorstandsmitglied, or Verstorbenen. Validates against the content.config.ts Zod schema and applies the project's kebab-case filename convention.
disable-model-invocation: true
---

# Add or update a person entry

Adds (or updates / removes) an entry in the site's two content collections:

- **`src/pages/_persons/`** — active members of the Nüsser Nachtschwärmer
- **`src/pages/_deceased/`** — deceased members shown in the Remembrance section

Both collections are loaded by [src/content.config.ts](../../../src/content.config.ts) with the schema:

```ts
z.object({
  title: z.string(),        // full name, with umlauts (e.g. "Jörg Geerlings")
  rank: z.string().optional() // German Schützenrang, e.g. "Oberleutnant"
})
```

The markdown body is empty — only frontmatter is consumed by the site components ([MemberRoster.astro](../../../src/components/MemberRoster.astro), [Remembrance.astro](../../../src/components/Remembrance.astro)).

## Filename convention

- **Lowercase, kebab-case, ASCII transliterated**: `surname-firstname.md`
  - `Jörg Geerlings` → `geerlings-joerg.md`
  - `Stephan Hüppeler` → `hueppeler-stephan.md`
  - `Sven-Joachim Otto` → `otto-sven-joachim.md`
- **German transliteration rules**: `ä→ae`, `ö→oe`, `ü→ue`, `ß→ss`.
- **Board members** (Vorstand) in `_persons/` use a numeric prefix that controls their display order at the top of the roster:
  - `01-` Vorsitzender, `02-` Stellv. Vorsitzender, `03-` Geschäftsführer/Schriftführer, etc.
  - Regular members have no prefix.
  - Only renumber prefixes if the user explicitly asks — board order is an organizational decision, not a cosmetic one.
- **Deceased entries** never use a numeric prefix.

## Frontmatter rules

- `title:` must be the full name as it should appear on the site — preserve umlauts and diacritics.
- `rank:` is optional. Common values seen in the repo: `Oberleutnant`, `Leutnant`, `Hauptmann`, `Major`, `Oberst`. Omit the field entirely (don't write `rank: null` or `rank: ""`) when there is no rank.
- Deceased entries usually omit `rank`.

## Procedure

1. Confirm the target collection (`_persons/` vs `_deceased/`) — ask the user if ambiguous.
2. Derive the kebab-case filename from the full name using the rules above. If a numeric prefix is needed (board role), ask the user where in the Vorstand order it goes.
3. Write the file with exactly the frontmatter fields needed — no extra keys, no body.
4. If you renamed/removed someone, also check `_persons/` and `_deceased/` for stale references and confirm the deletion with the user before removing.
5. Run `pnpm build` once to confirm the Zod schema validates the new file. The PostToolUse hook will already have formatted it.

## Examples

Active member, no rank:
```markdown
---
title: Lars Becker
---
```
→ `src/pages/_persons/becker-lars.md`

Board member, second-in-command:
```markdown
---
title: Jens Küsters
rank: Hauptmann
---
```
→ `src/pages/_persons/02-kuesters-jens.md`

Deceased entry:
```markdown
---
title: Gernot Dohmann
---
```
→ `src/pages/_deceased/dohmann-gernot.md`
