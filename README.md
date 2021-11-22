# liveShopT

I use the following tool and library, which are: express, moongos(mongodb), winston, jest, spend quite a lot of time on the project setup.

rename env.development file to just .env to access the environment variable

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
Starts the app in production by first building the project with yarn run build, and then executing the compiled JavaScript at build/index.js.

```yarn run build```
Builds the app at build, cleaning the folder first.

```yarn run test```
Runs the jest tests once. however no test case was written 

## Setup

 ```POST /inventory ```
    the request body is an Object instead of an Array from the example

 ```POST /show/:show_id/buy_item/:item_id ```
    the request body is an Object instead of an Array from the example

 ```GET /show/:show_id/sold_items/:item_id ```
    the request body is an Object instead of an Array from the example

note: I had the changes some meta keys to maintain a certain naming style.