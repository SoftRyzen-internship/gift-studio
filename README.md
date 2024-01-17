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

| Prop         | За замовчуванням | Опис                                                             |
| ------------ | ---------------- | ---------------------------------------------------------------- |
| `title `     | `undefined`      | обов'язковий, рядок - текст заголовку секції,                    |
| `className ` | `undefined`      | не обов'язковo, при необхідності додатково стилізувати компонент |

- ### ButtonLink

Компонент `ButtonLink` створюється за допомогою `Link` з
бібліотеки`react-scroll`, має стилізований варіант і виконує плавний скрол до
`targetName` за допомогою`click`. Рендериться як тег `a`.

| Prop         | Default     | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label `     | `undefined` | обов'язковий, рядок - текст кнопки, буде 16/19.5/700                                                                                                                                                                                                                                               |
| `targetName` | `undefined` | обов'язковий, рядок - містить ID секцї до котрої здійснюється плавний скролл                                                                                                                                                                                                                       |
| `variant `   | `undefined` | обов'язковий, рядок: `primary`- кнопка буде акцентного кольору та білим шрифтом, ховер теж присутній, `outline` - кнопка буде білого кольору з акцентним бордером 1px та акцентим кольором, ховер присутній, `ghost` - тільки текст, ховер присутній, текст кнопки, буде 24/29/400 чорного кольору |
| `className ` | `undefined` | опціонально, при необхідності додатково стилізувати компонент                                                                                                                                                                                                                                      |
| `tabIndex `  | `0`         | опціонально, при необхідності додатково вказати активний '0' чи пасивний '-1' для фокусу компонент                                                                                                                                                                                                 |

- ### Slider

Компонент `Slider` створений за допомогою бібліотеки `swiper`. Важливо давати
для `section` властивість `position: relative`.Це необхідно для того, щоб
`Slider` міг вийти за межі `container`. За назвою розділу ви зможете редагувати
власні стилі для вашого `sectionName`-слайдера і `sectionName`-слайду. Базова
висота для кожного Slider додана до global.css. Щоб приховати чи показати
компонент, ви можете його обернути в `div` і встановити умови і стилі в
classNames.

| Prop       | За замовчуванням | Опис                                                                                                                                                                                                    |
| ---------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `section ` | `undefined`      | обов'язковий, потрібно вказати назву секції для котрої обирається слайдер: `services`, `features`, `feedback` or `gallery` по ній будуть застосовані кількість елементів слайдеру згідно точок перелому |
| `slides`   | `undefined`      | обов'язковий, масив слайді `ReactNode` для перебору і інтеграції до слайдеру                                                                                                                            |

- ### NavBar
  Компонент є навігаційним тегом, що містить список прив’язних посилань для
  навігації між розділами. Використовується в `footer`, `header` та `MobileMenu`
  сайту .

| Prop           | За замовчуванням | Опис                                                                                                                                                                          |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isMobile `    | `undefined`      | обов’язковий, якщо значення `true`, застосовує стилі для мобільної версії, які використовуються в мобільному меню. Якщо `false`, компонент прихований до 1280px ширини екрану |
| `handleClick ` | `undefined`      | не обов'язковo, прокидається наверх від `ButtonLink`, необхідний для закриття мобільного меню під час натискання на елемент навігації                                         |
| `className `   | `undefined`      | не обов'язковo, якщо необхідно додати деякі зміни через стилі                                                                                                                 |

- ### MobileMenu

Мобільне меню з’являється, коли користувач натискає на `Mobile Btn` компонент.
З'являється лише тоді, коли ширина екрана є до 1280px. Містить основну навігацію
та `PhoneLink` компонент.

| Prop           | За замовчуванням | Опис                                                                                                                           |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `isMobile `    | `undefined`      | обов’язковий, прокидається наверх від компоненту `NavBar`                                                                      |
| `handleClick ` | `undefined`      | не обов'язковo, прокидається з `NavBar`, пропс необхідний для закриття мобільного меню при натисканні на навігаційне посилання |
| `className `   | `undefined`      | не обов'язковo, використовується в `header` для того, щоб додати трансформацію вздовж горизонтальної осі за умовою             |

- ### MobileBtn

Кнопка для відкриття та закриття мобільного меню. Залежно від `true` чи `false`
`isMobileMenuShown` змінює іконку та закриває або відкриває мобільне меню.

| Prop                 | За замовчуванням | Опис                                                                                                                                                                                                                    |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isMobileMenuShown ` | `undefined`      | необхідне, `boolean` тип. Якщо значення `true`, генерує в кнопці ікноку закриття і відповідний текст для `aria-label`. Якщо значення `false`, генерує в кнопці ікноку бургер-меню і відповідний текст для `aria-label`. |
| `handleClick `       | `undefined`      | необхідно, колбек функція, яка нічого не повертає. Використовується в `header` для відкриття та закриття мобільного меню                                                                                                |

- ### PhoneLink

Компонент посилання містить номер телефону для контакту. Він використовується
окремо в `MobileMenu` шириною до 768 пікселів і в `header` при ширині екрану від
768 пікселів. Імпортується в компонент ContactsLink, розташований у `footer`.
Містить атрибут `href` із номером телефону та атрибут `aria-label` з описом
кнопки. Посилання огортається навколо іконки телефону та номера телефону.

| Prop           | За замовчуванням | Опис                                                          |
| -------------- | ---------------- | ------------------------------------------------------------- |
| `customStyle ` | `undefined`      | не обов'язковo, якщо необхідно додати деякі зміни через стилі |

- ### ContactsList

Компонент списку контактів містить компонент `PhoneLink` із номером телефону і
посилання `a` на електронну пошту. Використовується в `footer`. Посилання на
пошту містить атрибут `href` з адресою електронної пошти та атрибутом
`aria-label` з описом кнопки. Посилання огортається навколо іконки пошти та
електронної адреси.

| Prop               | За замовчуванням | Опис                                                                    |
| ------------------ | ---------------- | ----------------------------------------------------------------------- |
| `customListStyle ` | `undefined`      | не обов'язковo, якщо необхідно додати деякі змін для списку через стилі |

- ### SocialMediaList

Список `ul`, що містить посилання на соціальні мережі. Використовується в
`footer`. Елемент списку містить компонент `SocialLink`, який огортає іконку
відповідної соціальної мережі.

| Prop               | За замовчуванням | Опис                                                                    |
| ------------------ | ---------------- | ----------------------------------------------------------------------- |
| `customListStyle ` | `undefined`      | не обов'язковo, якщо необхідно додати деякі змін для списку через стилі |

- ### SocialLink

A component containing a link to a social network. Used in the SocialMediaList
in the Footer and in the FaqListItem component. The component contains the href
attribute with a link, the attribute target with the "\_blank" property, the rel
attribute with the "noopener noreferrer nofollow" property, the title attribute
with the username prop, and the tabIndex attribute with the same prop. By
default, it has a link to Instagram from the variable InstagramLink, if there is
no other link from SocialLink prop.

Компонент, що містить посилання на соціальну мережу. Використовується в
`SocialMediaList` та в компоненті `FaqListItem`. Компонент містить `href`
атрибут із посиланням, `target` атрибут із властивістю `"_blank"`, `rel` атрибут
із властивістю `"noopener noreferrer nofollow"`, атрибут `title` з prop
`username` та атрибутом `tabIndex` з prop `tabIndex`. За замовчуванням він
містить посилання на Instagram зі змінної `InstagramLink`, якщо `SocialLink`
prop є `undefined`.

| Prop          | За замовчуванням | Опис                                                                                                                                                 |
| ------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `username `   | `undefined`      | потрібно, додається до змінної link за допомогою методу `concat()` для створення посилання на користувача в Instagram                                |
| `className `  | `undefined`      | не обов'язковo, якщо необхідно додати деякі зміни через стилі                                                                                        |
| `socialLink ` | `undefined`      | не обов'язковo, `string` для атрибута `href`, якщо його немає, використовується змінна `InstagramLink`                                               |
| `tabIndex `   | `0`              | не обов'язковo, має тип `number`. Використовується як індекс для атрибуту `tabindex`                                                                 |
| `children `   | `undefined`      | не обов'язковo, якщо немає prop, з’являється текст з іменем користувача Instagram. Використовується в `SocialMediaList` щоб огорнути іконки соцмереж |
| `aria-label ` | `undefined`      | не обов'язковo, додає опис до `aria-label`                                                                                                           |
