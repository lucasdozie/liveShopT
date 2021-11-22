# liveShopT

We talk about a lot of advanced Node.js and TypeScript concepts on the blog, particularly focused around Domain-Driven Design and large-scale enterprise application patterns. However, I received a few emails from readers that were interested in seeing what a basic TypeScript starter project looks like. So I've put together just that.

## Features
Project Setup
Added services and dataRepository
TypeScript v4
Testing with Jest
Local development with Nodemon

## Scripts
```yarn run start:dev```
Starts the application in development using nodemon and ts-node to do hot reloading.

```yarn run start```
Starts the app in production by first building the project with npm run build, and then executing the compiled JavaScript at build/index.js.

```yarn run build```
Builds the app at build, cleaning the folder first.

```yarn run test```
Runs the jest tests once.