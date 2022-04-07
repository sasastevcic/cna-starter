This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the
file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in
`pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn cypress`

Launches the e2e tests.

### `yarn storybook`

Launches the Storybook UI tool for building components and pages in isolation.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.\
Official page: https://storybook.js.org/

### `yarn build-storybook`

Publishes Storybook.\
Read more: https://storybook.js.org/docs/react/workflows/publish-storybook

### `yarn generate ComponentName`

Learn more about
[Generate React CLI](https://github.com/arminbro/generate-react-cli#generate-react-cli).

In order to generate lazy component, add `--type=componentDynamic` as an argument.\
`yarn generate ComponentName --type=componentDynamic`

In order to generate a template, add `--type=template` as an argument.\
`yarn generate TemplateName --type=template`

## Folder Structure

The structure follows [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
guidelines.

- atoms - the smallest unit, must be self-contained and not dependant on any external modules.
  (types and configuration being the exception)
  - `Icon`, `Paragraph`, `Heading`, `Input`, `Button`, etc...
- molecules - must be restrained to only use atoms and minimal internal state.
  - atom composition, `Modal`, `Carousel`, etc...
- organisms - full freedom to use and be anything, but generally reserved for complex state uses.
  - molecule composition, `SpecificModal`, `SpecificCarousel`, etc...
- layout - only for layout-based components.
  - `Container`, `Grid`, etc...
- templates - consist mostly of groups of organisms stitched together.

## Component Structure

- Component.tsx - the component logic and UI
- Component.dynamic.tsx - lazy loaded component
- Component.styles.tsx - styled-components
- Component.data.ts - types and data
- Component.test.tsx - unit tests
- Component.stories.tsx - Storybook UI components
- Component.config.ts - configuration for the component
- index.ts - default export for the component

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
