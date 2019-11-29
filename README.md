# Angular8-seed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version ~8.3.19 with code: ~8.2.14


```html
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / ? \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 8.3.19
Node: 10.16.3
OS: win32 x64
Angular: 8.2.14
... animations, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.803.19
@angular-devkit/build-angular     0.803.19
@angular-devkit/build-optimizer   0.803.19
@angular-devkit/build-webpack     0.803.19
@angular-devkit/core              8.3.19
@angular-devkit/schematics        8.3.19
@angular/cdk                      8.2.3
@angular/cli                      8.3.19
@angular/material                 8.2.3
@ngtools/webpack                  8.3.19
@schematics/angular               8.3.19
@schematics/update                0.803.19
rxjs                              6.5.3
typescript                        3.7.2
webpack                           4.39.2

```

---

## Tooling

## @ngrx deployment 

### @ngrx dependencies
```javascript
npm i @ngrx/store @ngrx/effects  @ngrx/entity @ngrx/data  @ngrx/schematics @ngrx/store-devtools @ngrx/router-store --save
```

```html
"devDependencies": {
  "@ngrx/data": "^8.5.2",
  "@ngrx/effects": "^8.5.2",
  "@ngrx/entity": "^8.5.2",
  "@ngrx/router-store": "^8.5.1",
  "@ngrx/store": "^8.5.2",
  "@ngrx/store-devtools": "^8.5.2",
}
```


### @ngrx devDependencies
```javascript
npm i @ngrx/schematics --save-dev
```

```html
"devDependencies": {
  "@ngrx/schematics": "^8.5.2",
}
```


> Update: angular.json > cli > defaultCollection with @ngrx/schematics
```javascript
  "cli": {
    "defaultCollection": "@ngrx/schematics"
  }
```


Further information:
https://ngrx.io/guide/schematics/install


### Prettier

- Include Prettier (this can be handle by the pipeline later on):
```javascript
  npm install --save-dev --save-exact prettier
```
- Include a Service with a Component already declared:
```javascript
  cd test-app/src/app
  mkdir service
  ng g s service
```  
- Include a reference to empty side defined boxes
- Include modular bootstrap 4
```javascript
  npm install bootstrap --save
  open angular.json
  "styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
```

### ESlint

### Husky


### ngMocks

We are going to use: MockStore from '@ngrx/store/testing' so we later we can set the state using the setState method from MockStore.

<b>ngMocks</b> will help us to mock:
MockComponent, MockDirective, MockPipe, MockModule, etc.

Helper function for creating angular mocks for test.
<a href="https://www.npmjs.com/package/ng-mocks">ng-mocks</a>



### json-server
Mocking a REST API

```javascript
$ cd ~/Angular8-seed
$ npm i --save json-server 
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


### Storybook
Mocking UI faster

```javascript
npm i @babel/core @babel-loader --save-dev
npm install @storybook/angular --save-dev
```

> Add a npm script: 
```javascript
{
  "scripts": {
    "storybook": "start-storybook"
  }
}
```

> Run 
```javascript
npm run storybook
```

### Further information:
<a href="https://storybook.js.org/docs/guides/guide-angular/">Storybook for Angular</a>



### faker

> There is already a file: generateFake.js inside /server

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


---

## Development server

```javasciot
ng serve -o
```

## Code scaffolding

```javascript
ng generate component component-name
```

> to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`


Using ngrx schematics:

```javascript
ng generate action ActionName
```

> to generate a new component. You can also use `ng generate action|reducer|container|effect|entity featureName`


Further information:
https://ngrx.io/guide/schematics

---

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

# TestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

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


