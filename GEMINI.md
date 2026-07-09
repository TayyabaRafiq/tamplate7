# Project Context: Rental Car Website

## Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- CMS: Sanity CMS
- Working in VS Code PowerShell (not WSL)
- Project folder: D:\tamp7\tamplate7

## Project Goal
A premium dark-themed rental car website with dynamic car listings, dynamic detail pages, and working booking/payment flow.

---

## Important Completed Fixes

### Dynamic routing fixed
Homepage links changed from:
```tsx
<Link href={`/cars/${car._id}`}>
```

to:

```tsx
<Link href={`/cars/${car.slug}`}>
```

Sanity returns:

```ts
"slug": slug.current
```

---

### Dynamic detail page fixed
File:

`src/app/cars/[slug]/page.tsx`

Changes:
- Removed `"use client"`
- Uses:

```ts
import { getCarBySlug } from "@/sanity/lib/getCar";
```

- Fetches:

```ts
const car = await getCarBySlug(params.slug);
```

---

### Sanity query fixed
File:

`src/sanity/lib/getCar.ts`

Correct query:

```ts
*[_type == "car" && slug.current == $slug][0]
```

---

### Queries updated
File:

`src/sanity/lib/queries.ts`

Both `allcars` and `fourcars` include:

```ts
"slug": slug.current
```

---

## Theme Rules (Do NOT break)

Premium dark theme:

- Background: `#0F172A`
- Card/secondary: `#1E293B`
- Accent orange: `#F59E0B`

Keep these colors consistent.

Do NOT revert to white backgrounds.

---

## UI Improvements Already Done

### Header
- Fake search image removed
- Fake profile icons removed
- Functional search bar kept
- Search updates URL query: `?search=`
- MORENT logo enlarged
- Better spacing
- Search bar themed correctly

### Footer
- MORENT text fixed
- Contrast improved

### TopHeader
File:

`src/components/TopHeader.tsx`

Updated to:
- "Premium Car Rental Experience"
- "Drive your dream car at the best daily rates"
- `bg-secondary`
- Orange accent on "Car Rental"

### Hero section
File:

`src/components/Hero.tsx`

Changes:
- Dynamic Sanity `fourcars`
- Uses `"use client"`
- Search removed from Hero
- Wrapper:

```tsx
bg-secondary rounded-xl
```

- Card background:

```tsx
bg-secondary
```

- Price text:

```tsx
text-foreground
```

### Homepage
File:

`src/app/page.tsx`

Main wrapper:

```tsx
<div className="max-w-[1240px] mx-auto px-4">
```

### Card headings fixed
Changed:
- `text-muted-foreground`

to:

```tsx
text-foreground text-lg md:text-xl font-semibold
```

Corrected spelling:
- Recommendation

### Button styling
All buttons should use:

```tsx
className="bg-primary px-4 py-2 text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
```

---

## Current Remaining Issue (Highest Priority)

### Rent Now button booking flow

Problem:
- Only one Rent Now button works
- Others are static
- Some buttons redirect to car detail page because button is inside clickable card link

Correct intended behavior:

### Card click:
Go to:

```text
/cars/[slug]
```

### Rent Now button click:
Go to:

```text
/payment
```

---

### Fix needed in Hero.tsx

Likely current structure:

```tsx
<Link href={`/cars/${car.slug}`}>
  ...
  <button>Rent Now</button>
</Link>
```

This is wrong.

Need to separate:

```tsx
<Link href={`/cars/${car.slug}`}>
  image + name + brand
</Link>

<Link href="/payment">
  <button>Rent Now</button>
</Link>
```

---

### Fix needed in src/app/page.tsx

Many buttons still:

```tsx
<button>Rent Now</button>
```

Wrap all with:

```tsx
<Link href="/payment">
  <button>Rent Now</button>
</Link>
```

---

## Editing Rules for Gemini

- Do NOT change design unnecessarily
- Do NOT change premium dark theme
- Make minimal safe edits
- Preserve responsiveness
- Explain what will be changed before editing
- Fix functionality first
- Check all Rent Now buttons
- Verify all navigation links

IMPORTANT:
Never change UI/design unless explicitly asked.
Do not modify colors, layout, spacing, typography, or component styling.
Only fix functionality and logic.