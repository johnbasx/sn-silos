![SN Silos logo](/public/images/logo/snsilos-logoside.png?raw=true "SN Silos")

# SN Silos Website

## SN Silos Private Limited

Corporate Identification Number : (CIN) U51100DL2018PTC339003

Registration Number : 339003.

Email address : nitish.narula14@gmail.com

Registered address : 2637, FIRST FLOOR, UNIT-II, NAYA BAZAR DELHI North Delhi DL 110006 IN.

This website is built using [Next.js](https://nextjs.org/) for the majority of the code in [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) for styling & [i18next](https://www.npmjs.com/package/next-i18next) for Language Translations modules.

## Getting Started

To run the project in development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Now,open [http://localhost:3000](http://localhost:3000) with your preferred browser to see the results.

You can start editing the home page by modifying `pages/index.tsx`. The page auto-updates as you edit the file. Although you need to re-start the development server everytime you change the translation files located in `public/locales/*`

All the sections in every page are devided into individual components that lie in their respective directories that share the same folder name as the page name.

If you want to integrate some backend code to the site you can use the [API routes](https://nextjs.org/docs/api-routes/introduction) which can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/filename). This endpoint can be edited in `pages/api/filename.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Guidelines

### Language

To add new language files go to `public/locales/en` to add new English translations then go to `public/locales/hn` to add the respective Hindi translations. After that go to `src/types/i18next.d.ts` to add the file directory and add its types for proper type inference and error detection while adding new language files.

If you want to add new a new `language` go to `next-i18next.config.js` and add the new language configurations and then add a folder in the `public/locales/` directory for the particular language and then repeat the above steps.

To add the new translated files, go the specific page and then add the file name during server side fetch and then you can use in the different nested components by using `useTranslation()` hook from `next-i18next`

#### Forexample:

```typescript
// extrapage.tsx

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "common"])),
  },
});
```

```typescript
// component.tsx
import { useTranslation } from "next-i18next";

...
const Component= () => {
    const { t } = useTranslation("filename")
    return (
        <div>{t('objectname.key')}</div>
    )
}
// or
somevalue={t('objectname.key')}
```

### Build

To build the project for production apart from deployment to vercel of other edge functions, use the following command

```bash
npm run build
# or
yarn build
```

You can find the generated output in the `build` folder

If you want to build static files and deploy them as static only then use this page as your reference - [NextJs Deployment](https://nextjs.org/docs/deployment#static-only)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
