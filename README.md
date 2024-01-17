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

## 💼 Панель керування адміністратора Sanity Studio 💼

Для управління вмістом та конфігурацією вашого додатка Next.js, перегляньте
додаткову документацію з
[Sanity Studio](https://docs.google.com/document/d/14rdHNc4vb7Z7vKZZglbxdZAlBCxMK1AByJ6xttbFOlI/edit?usp=sharing).

---

## 💼 Components API 💼

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

- ### SectionHeading

Наявний текст матиме тег `h2`, нижній марджін 24px та буде aкцентного кольору в
наступних розмірах: (екран до 768px) - 48/60.48/400 Caveat, (екран від 768 до
1280px) 56/70.56/400 Caveat, (екран від 1280px) 64/80.64/400 Caveat

| Prop         | Default     | Description                                                   |
| ------------ | ----------- | ------------------------------------------------------------- |
| `title `     | `undefined` | обов'язковий, рядок - текст заголовку секції,                 |
| `className ` | `undefined` | опціонально, при необхідності додатково стилізувати компонент |

- ### ButtonLink

The `ButtonLink` component is created using `Link` from `react-scroll`, has
styled variant and perfom smooth scroll to `targetName` by `click`Rendered as
tag `a`.

| Prop         | Default     | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label `     | `undefined` | обов'язковий, рядок - текст кнопки, буде 16/19.5/700                                                                                                                                                                                                                                               |
| `targetName` | `undefined` | обов'язковий, рядок - містить ID секцї до котрої здійснюється плавний скролл                                                                                                                                                                                                                       |
| `variant `   | `undefined` | обов'язковий, рядок: `primary`- кнопка буде акцентного кольору та білим шрифтом, ховер теж присутній, `outline` - кнопка буде білого кольору з акцентним бордером 1px та акцентим кольором, ховер присутній, `ghost` - тільки текст, ховер присутній, текст кнопки, буде 24/29/400 чорного кольору |
| `className ` | `undefined` | опціонально, при необхідності додатково стилізувати компонент                                                                                                                                                                                                                                      |
| `tabIndex `  | `0`         | опціонально, при необхідності додатково вказати активний '0' чи пасивний '-1' для фокусу компонент                                                                                                                                                                                                 |

- ### Slider

The `Slider` component is created using `swiper` library. It is important to
give the `section` property `position: relative`. This is necessary in order for
the `Slider` to extend beyond the `container`. By section bame you will able to
edit custom styles for your `sectionName`-slider and `sectionName`-slide. Base
height for every Slider added to global.css. For hiddeen/show you able to wrap
Slider component by `div` adn set up conditions in classNames.

| Prop       | Default     | Description                                                                                                                                                                                             |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `section ` | `undefined` | обов'язковий, потрібно вказати назву секції для котрої обирається слайдер: `services`, `features`, `feedback` or `gallery` по ній будуть застосовані кількість елементів слайдеру згідно точок перелому |
| `slides`   | `undefined` | обов'язковий, масив слайді `ReactNode` для перебору і інтеграції до слайдеру                                                                                                                            |

- ### NavBar

The component is a nav tag containing a list of anchor links for navigation
between sections. It is used in the header and footer of the site.

| Prop           | Default     | Description                                                                                                                                                                        |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isMobile `    | `undefined` | required, if true applies the styles for the mobile version that are applied in the mobile menu. If false, it is hidden for mobile versions and tablets and appears on the desktop |
| `handleClick ` | `undefined` | optionally, wakes up from ButtonLink, required to close the mobile menu when clicking on the navigation link                                                                       |
| `className `   | `undefined` | optionally, if it's necessary to add some style changes                                                                                                                            |

- ### MobileMenu

The mobile menu appears when the user clicks on Mobile Btn. Appears only when
the screen width is up to 1280px. Contains the main navigation and the PhoneLink
component

| Prop           | Default     | Description                                                                                                                                                                        |
| -------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isMobile `    | `undefined` | required, if true applies the styles for the mobile version that are applied in the mobile menu. If false, it is hidden for mobile versions and tablets and appears on the desktop |
| `handleClick ` | `undefined` | optionally, wakes up from NavBar, required to close the mobile menu when clicking on the navigation link                                                                           |
| `className `   | `undefined` | used in the header, to add a transform along the horizontal axis by condition                                                                                                      |

- ### MobileBtn

Button to open and close the mobile menu. Depending on the props,
isMobileMenuShown renders an icon in itself and closes or opens the mobile menu

| Prop                 | Default     | Description                                                                                                                                                                     |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isMobileMenuShown ` | `undefined` | required, boolean value. If false, generates a mobile menu close icon and close text for the aria-label. If true, generates a burger menu icon and opening text for aria-label. |
| `handleClick `       | `undefined` | allback which returns void. Moves up to the header, for toggle mobile menu                                                                                                      |

- ### PhoneLink

The link component contains the phone number for the contact. It is used
separately in the mobile menu up to a width of 768px and in the header with a
width of 768px. Imported into the ContactsLink component located in the Footer.
Contains the href attribute with the phone number and the aria-label attribute
with the description of the button. The link wraps around the phone icon

| Prop           | Default     | Description                                             |
| -------------- | ----------- | ------------------------------------------------------- |
| `customStyle ` | `undefined` | optionally, if it's necessary to add some style changes |

- ### ContactsList

The contact list component contains the PhoneLink component with a phone number
and a link with email. Used in Footer. The mail link contains an href attribute
with the email address and an aria-label attribute with the description of the
button. The link wraps around the mail icon.

| Prop               | Default     | Description                                                         |
| ------------------ | ----------- | ------------------------------------------------------------------- |
| `customListStyle ` | `undefined` | optionally, if it's necessary to add some style changes to the list |
