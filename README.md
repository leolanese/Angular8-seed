# Angular8-seed

Angular seed for advanced projects.

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

#### Note:
<p> ~version: "Approximately equivalent to version", will update you to the next patch version. </p>
<p> ^version: Will update you to the next minor version. This could affect Jenkins version deployments based on the OS</p>

---

## Tooling build
> tooling /ˈtuːlɪŋ/ - assorted tools, especially ones required for a mechanized process.

## Redux

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

#### @ngrx/schematics extra step:
> Update: angular.json > cli > defaultCollection with @ngrx/schematics
```javascript
  "cli": {
    "defaultCollection": "@ngrx/schematics"
  }
```


Further information:
https://ngrx.io/guide/schematics/install

---

## Code standarts 

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

---

## Quality Control

### bootstrap 4

- Include modular bootstrap 4
```javascript
  npm install bootstrap --save
  open angular.json
  "styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
```

---

## Unit-Test helpers

### ngMocks to mock Angular in general

 We are going to use: MockStore from '@ngrx/store/testing' so we later we can set the state using the setState method from MockStore.

<b>ngMocks</b> will help us to mock:
MockComponent, MockDirective, MockPipe, MockModule, etc.

Helper function for creating angular mocks for test.
<a href="https://www.npmjs.com/package/ng-mocks">ng-mocks</a>+


### MockStore 
We don't import the real Store with reducers into your TestBed.  We will be using mockStore, ngrx7+ provides a mocked Store out of the box. Instead of manually mocking the Store (famouse reported buggy issues) we simply use provideMockStore in your TestBed, with/without overrideSelector to mocking the store state.

```javascript
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('Should Component test values', () => {

providers: [
...
        provideMockStore({
            initialState: {
                details: {
                    isLoading: true,
                    policy: null
                }
            }
        })
...
]

```        

1- We're substituting the real Store with a MockStore and providing it an initial state. Now we can test how the component behaves in various states simply by calling setState() on our MockStore.
2- We are spying on: store.dispatch() so we can verify that the component dispatches the Action.


Further information:
https://ngrx.io/api/store/testing/MockStore

### ng-bullet
Bullet is a library which enhances your unit testing experience with Angular TestBed, greatly increasing execution speed of your tests.

Furhter information:
<a href="https://www.npmjs.com/package/ng-bullet">ng-bullet npm</a>

---

### json-server
Mocking the REST API

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


### faker
Tool to generate massive amounts of fake data in the browser, very handy to mock day just knowing the Interface/Model.

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
<a href="https://github.com/marak/Faker.js/#api-methods">facker npm</a>

---

## UI

### Angular Material

Angular CLI's install schematic

Creates toolbar and navigation components
```javascript
ng generate @angular/material:material-nav --name myNav
```
// Creates toolbar and navigation components
```javascript
ng generate @angular/material:material-nav --name myNav
```
Create a dashboard component
```javascript
ng generate @angular/material:material-dashboard --name myDashboard
```
Creates a table component
```javascript
ng generate @angular/material:material-table --name myTable
```

Adds Angular Material to an application without changing any templates
```javascript
ng generate @angular/material:material-shell --name myShell
```
Creates a address form component
```javascript
ng generate @angular/material:address-form --name myAddressForm
```

Further Information:
<a href="https://material.angular.io/components/categories">material componentes</a>


### Bootstrap 4+

### Do not import all Modules, Just Include what you need:

Bootstrap Reboot:
```javascript
@import "~bootstrap/scss/reboot"; // add reset reboot scss
```

Bootstrap Grid:
Both Bootstrap and Angular Material Design delivers solutions based on a grid system. They are both quite similar although Bootstrap’s grid is more advanced.
```javascript
@import "~bootstrap/scss/grid"; // add the grid
```

Bootstrap Utilities:
```javascript
@import "~bootstrap/scss/utilities"; // add css utilities
```


File angular.json has included "Bootstrap CSS" and JS files as well as "jQuery" to the styles and scripts arrays under the build target:
```javascript
"architect": {
  "build": {
    [...], 
    "styles": [
      "src/styles.css", 
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]
    },
```

### font-Awesome: @angular-fontawesome
Dependencies:
```javasript
    "@fortawesome/angular-fontawesome": "^0.5.0",
    "@fortawesome/fontawesome-svg-core": "^1.2.25",
    "@fortawesome/free-solid-svg-icons": "^5.11.2",
 ```   


Include fontawesome:
```javascript  
<div style="text-align:center">
  <fa-icon [icon]="faCoffee"></fa-icon>
</div>
```

Further information:
https://www.npmjs.com/package/@fortawesome/angular-fontawesome
https://fontawesome.com/how-to-use/with-the-api/setup/importing-icons
https://github.com/FortAwesome/angular-fontawesome/blob/be99071851eea2c6d3211b9c3de38aca44a5b624/docs/usage/features.md#basic-use


### Storybook
Mocking UI faster (OPTIONAL - Not install be default)

```javascript
npm i @babel/core @babel-loader --save-dev
npm i @storybook/angular --save-dev
```

> Add a npm script: 
```javascript
{
  "scripts": {
    "storybook": "start-storybook"
  }
}
```

```html
    "@storybook/addon-actions": "^5.2.6",
    "@storybook/addon-knobs": "^5.2.4",
    "@storybook/addon-links": "^5.2.4",
    "@storybook/addon-notes": "^5.2.4",
    "@storybook/addons": "^5.2.4",
    "@storybook/angular": "^5.2.6",
```


> Run 
```javascript
npm run storybook
```

### Further information:
<a href="https://storybook.js.org/docs/guides/guide-angular/">Storybook for Angular</a>



### Extra (pre-configurated) dependencies:
Husky, prettier, tslint-config-prettier, codelyzer, ng-bullet, @compodoc/compodoc and few others


---
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

```javascript
ng serve -o
```

```html
i ｢wds｣: Project is running at http://localhost:4200/webpack-dev-server/
i ｢wds｣: webpack output is served from /
i ｢wds｣: 404s will fallback to //index.html
```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Build
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```javascript
ng build --configuration <config>
```

Every file will be loaded depending on the build option:

Example:
```javascript
ng build
ng build --prod
ng build -c staging
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

<h5> { 'Leo Lanese',<br>
       'Building Inspiring Responsive Reactive Solutions',<br>
       'London, UK' }<br>
</h5>
<h5>Portfolio
<a href="http://www.leolanese.com" target="_blank">http://www.leolanese.com</a>
</h5>
<h5>Twitter:
<a href="http://twitter.com/LeoLaneseltd" target="_blank">twitter.com/LeoLaneseltd</a>
</h5>
<h5>Questions / Suggestion / Recommendation ?
<a href="mail:to">developer@leolanese.com</a>
</h5>
<h5>DEV.to:
<a href="http://www.dev.to/leolanese" target="_blank">www.dev.to/leolanese</a>
</h5>
<h5>Blog:
<a href="http://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
</h5>



