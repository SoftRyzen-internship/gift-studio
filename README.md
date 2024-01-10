This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

---

## 💼 Components API 💼

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

- ### SectionHeading

| Prop         | Default     | Description                              |
| ------------ | ----------- | ---------------------------------------- |
| `title `     | `undefined` | required, any text content section title |
| `className ` | `undefined` | add optional styles if needed            |

- ### ButtonLink

The `ButtonLink` component is created using `Link` from `react-scroll`, has
styled variant and perfom smooth scroll to `targetName` by `click`

| Prop         | Default     | Description                                                               |
| ------------ | ----------- | ------------------------------------------------------------------------- |
| `label `     | `undefined` | required, any text content for button title                               |
| `targetName` | `undefined` | required, id of existing DOM element, which is the target for the scroll  |
| `variant `   | `undefined` | required, choose the name of the section: `primary`, `outline` or `ghost` |
| `className ` | `undefined` | add optional styles if needed                                             |

- ### Slider

The `Slider` component is created using `swiper` library. It is important to
give the `section` property `position: relative`. This is necessary in order for
the `Slider` to extend beyond the `container`. By section bame you will able to
edit custom styles for your `sectionName`-slider and `sectionName`-slide

| Prop       | Default     | Description                                                                               |
| ---------- | ----------- | ----------------------------------------------------------------------------------------- |
| `section ` | `undefined` | required, choose the name of the section: `services`, `features`, `feedback` or `gallery` |
| `slides`   | `undefined` | required, any array of slides `ReactNode` for mapping                                     |
