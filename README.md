# Ngrx8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19

## Tooling
### Mocking a REST API
json-server
```javascript
$ cd ~/angular-example
$ npm install --save json-server 
$ mkdir server
$ cd server
```

```javascript
// this will avoid any error
{
    "something": []
}
```

```javascript
// run the REST API server
npm run server
```

This JSON file will act as a database for your REST API server. You can simply add some data to be served by your REST API or use 
Faker.js for automatically generating massive amounts of realistic fake data.

faker.js
```javascript
$ cd ..
$ npm install faker --save
$ npm run generateFake
```

```javascript
// run the REST API server
npm run server
```

You can now send HTTP requests to the server just like any other REST API server request. 
Your server will be available at: http://localhost:3000/

Further faker information:
https://github.com/marak/Faker.js/#api-methods




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
