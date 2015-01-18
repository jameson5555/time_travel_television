# angular-sprout — The scalable angular seed app
Angular Sprout exists to give developers the simplest possible best practices base on which to build scalable angular applications. Its worth noting that, though minimal, Angular Sprout is highly opinionated and is not everything to everyone, or anyone for that matter.

## Running Angular-Sprout
 - Point your webserver of choice to the root.
 - Yahtzee!!

## Running Tests
 - Run npm to install dev dependancies.
 ```
 npm install
 ``` 
 - Run Karma
 ```
 karma start karma-unit-config.js
 ```

## Flatten Directories
Keeping the directory hierachy flat makes it easy find files. I believe is using name convention to organize files leads to a more navigable hierarchy.

 - The major module types: controllers, services, filters, contants, directives, etc get their own folders because the end up containing many cross cutting concerns.
 - Application folders (controllers, etc...) and configuration folders (data, etc...) live at the same level in the hierearchy. Use your build tool (grunt, etc..) to prepare deplyment folders.

## Module files.
Each instance of an angular module gets its own file. Monolithic controler, services, etc... are a potential maintenance nightmare.

## Test files.
Placing tests adjecent to tested modules makes it easier to find corresponding tests.

## Namespaces
giving each module type its own namespace off of a common one clarifies the sepeartion of concers, preserves the global scope and saves one having to instantiate anguar modues in every file.

```
var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);
```


## Directory Layout

constants/                    --> Application constants.
  configuration-constants.js	

controllers/                  
  details-controller.js     
  menu-controller.js        

data/                         --> Folder for mock data
  items.json                

direcives/
  menu-item-directive.js   

filters/
  to-datetime-string.js

libraries/                    --> angular and 3rd party javascript libraries
  angular.js                
  angular.min.js          
  angular-*.js              

services/
  menu-service.js          

templates/                    --> All view, directive and include templates.
  details-template.html				
  menu-template.html					
  menu-item-template.html		

styles/
  application.css            

index.html                  --> Application layout file (the main html template file of the app)
application.js              --> application bootstrap
karma-unit.config.js        --> Unit test Karma configuration files.
package.json                --> Node dev dependancies.
