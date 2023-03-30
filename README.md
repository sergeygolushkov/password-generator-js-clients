# Password Generator JS

This is an javascript implementation of password generator apps. This is a monorepository that uses [Turborepo](https://turbo.build/repo).

## Official site

TODO: add official url when it will be deployed

## Related repositories

[.NET](https://github.com/sergeygolushkov/password-generator-dotnet) implementation. API and native clients written with dotnet core.

## What's inside this repository?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app to generate passwords
- `shared`: a shared library that contains platform agnostic code. Like logic, state, etc.
- `web-ui`: a web specific React component library used by `web` application. Uses [MUI](https://mui.com/) library.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `native`: planned. A [ReactNative](https://reactnative.dev/) app which will be added in the future.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```
