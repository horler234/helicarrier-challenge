# Helicarrier Challenge

## _MeCrush_

MeCrush is a simple react native application to view user's celebrity crushes.

## Decisions

- Created a well structured project and used standard coding practices.
- Separated all constant values in a "constants" folder.
- Made comments using [JSDoc](http://en.wikipedia.org/wiki/JSDoc) to ensure code readability.
- Created a `CategoryCard` component for filtering crushes based on categories.
- Created `Crush` component that displays information of individual crush.
- Created absolute paths to ease imports in the code and avoid long relative paths.

## Improvements

- Add skeleton loaders to replace crush cards while data is being fetched (didn't add this because I used hardcoded data)
- Render a fixed search and filter component on the top of the screen when user scrolls away from the search component.
- Render a modal that shows detailed information on a crush when `Crush` component is clicked on.
- Use a state management system (e.g. Redux, Context API) to handle data in the application

## Installation

MeCrush requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd helicarrier-challenge
yarn
yarn start
```

## Tech

[React Native](https://reactnative.dev)
[Expo](https://docs.expo.dev)
[Typescript](https://typescriptlang.org)
[GraphQL](https://graphql.org)
