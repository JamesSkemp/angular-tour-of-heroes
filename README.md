# AngularTourOfHeroes

This project follows the official [Angular Tour of Heroes tutorial](https://angular.io/tutorial), as of late June 2021.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

Commands run:

```
ng new angular-tour-of-heroes
ng serve --open
ng generate component heroes
ng generate component hero-detail
ng generate service hero
ng generate component messages
ng generate service message
# Generate a module in src/app (flat) and register it in AppModule imports (module=app)
ng generate module app-routing --flat --module=app
ng generate component dashboard
# In-memory Web API
npm install angular-in-memory-web-api --save
ng generate service InMemoryData
ng generate component hero-search
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
