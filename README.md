# Super Flexible Framework

Super Flexibile Framework, shorten to SFF, is a framework I have designed to help me setting up the initial code for the projects. 

The framework is based on Susy layout system, as well as it uses Sass and gulp. 

## SCSS Folder Structure

On every file you add, you need to navigate to app.scss and import it there.

### 0-lib

In this file you should include libraries that you would want to include in your project. 
A clean way to do this, is via bower. However, if you don't feel comfortable with bower, you can always add the files manually. 

Some libraries examples; jQuery, font-awesome, susy and many more.

### 1-helpers

Helpers folder is where you put the code that will help you with the development process. 
Every single projetc I do, had Sass mixins. 

Some helpers examples; typography, mixins, functions, shapes and many more.

### 2-variables

The variables section is the configuration of the website. 

You have colors.scss file, where you keep all of your colors and name them descripitvelly - I do this because this will help to keep the track of the colors. 

Susy and Breakpoints file, you can add as many breakpoints as you want, and you can change the Susy default settings.

The settings file is your master file where you basically have all the configuration for the site.
That can be buttons, fonts, global styles and so on. 


### 3-base

### 4-layouts

### 5-objects

Objects are not modules or components. Objects for me a things like buttons, forms, checkboxes etc..
Objects are small and they can be put on every part of the website. 

### 6-modules

Modules are big components/modules, that can use some objetcs like buttons. Modules can be something like a slider, card and many more. 

### 7-pages

## The Setting file


