# Learning Angular

Angular is a platform for building web applications. It is a complete framework that includes everything you need to build a web application, from the frontend to the backend. Angular is maintained by Google and is widely used for building complex web applications.

## Core Concepts

### Components

In Angular, everything is a component. A component is a class that controls a part of the screen — a view. It consists of a template and a class. The template is the HTML that defines the view, and the class is the TypeScript code that controls the view.

To create a component, you use the `@Component` decorator. Here's an example:

```import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'My First Angular App';
}
```

### Modules

Angular applications are modular and Angular has its own modularity system called NgModules. An NgModule is a container for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. It can contain components, service providers, and other code files whose scope is defined by the containing NgModule.

To create a module, you use the `@NgModule` decorator. Here's an example:

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
 declarations: [
    AppComponent
 ],
 imports: [
    BrowserModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
```


### Services

Services in Angular are used to share data and logic across components. They are singleton objects that get instantiated only once during the lifetime of an application.

To create a service, you use the `@Injectable` decorator. Here's an example:

```import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root',
})
export class DataService {
 constructor() { }

 getData() {
    return 'Hello from DataService!';
 }
}
```

### Routing

Angular provides a powerful routing system that allows you to navigate between different components. You can define routes in your application using the `RouterModule` and the `Routes` array.

Here's an example of how to set up routing:

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'about', component: AboutComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Getting Started with Angular

To get started with Angular, you need to have Node.js and npm installed on your system. You can download Node.js from [here](https://nodejs.org/en/download/).

Once you have Node.js and npm installed, you can install Angular CLI globally on your system using npm:

`npm install -g @angular/cli`


After installing Angular CLI, you can create a new Angular application using the `ng new` command:

`ng new my-angular-app cd my-angular-app`


To start the development server and run your application, use the `ng serve` command:

`ng serve`

This will compile your application and start a development server. You can access your application by navigating to `http://localhost:4200/` in your web browser.

## Basics of Angular

- **Components**: The building blocks of Angular applications. Components control a part of the screen — a view.
- **Modules**: Containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.
- **Services**: Used to share data and logic across components.
- **Routing**: Allows navigation between different components.

### FAQ

1. **What is a component in Angular?**
   A component is a class that controls a part of the screen — a view. It consists of a template and a class.

2. **What is a module in Angular?**
   An NgModule is a container for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.

3. **What is a service in Angular?**
   A service in Angular is used to share data and logic across components.

4. **How do I navigate between components in Angular?**
   You can navigate between components using the Angular Router. You define routes in your application using the `RouterModule` and the `Routes` array.

### References

- [Angular Documentation](https://angular.io/docs)
- [Angular Tutorial for Beginners](https://www.youtube.com/watch?v=Fdf5aTYRW0E)

### More Notes

- **Angular CLI**: A command-line interface for Angular. It helps you to initialize, develop, scaffold, and maintain Angular applications.
- **Directives**: Angular directives are classes that add additional behavior to elements in your Angular applications.
- **Dependency Injection**: A design pattern used in Angular to inject dependencies into classes.


<!-- { title: 'Explore the Docs', link: 'https://angular.dev' },
          { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
          { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
          { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
          { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' }, -->
