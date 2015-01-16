# angular-sprout — The scalable angular seed app
This project modifies the standard angular-seed project into a module pattern in which common 
functionality is organized into the same directory. This approach seperates controllers, services, 
filters and directives into their own files and strives to keep the application hierachy as flat 
as possible.

The app contains AngularJS libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball), start up
our (or yours) webserver and you are ready to develop and test your application.

The sprout app doesn't do much, just shows how to wire controllers, views, services, filters and directives together. You can
check it out by opening app/index.html in your browser (might not work file `file://` scheme in
certain browsers, see note below).

_Note: While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend hosting the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`._


## How to use angular-sprout

Clone the angular-sprout repository and start hacking...


### Running the app during development

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `scripts/web-server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.


### Running the app in production

This really depends on how complex is your app and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static html, css and js files that just need to be hosted
somewhere, where they can be accessed by browsers.

If your Angular app is talking to the backend server via xhr or other means, you need to figure
out what is the best way to host the static files to comply with the same origin policy if
applicable. Usually this is done by hosting the files by the backend server or through
reverse-proxying the backend server(s) and a webserver(s).


### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Testacular](http://vojtajina.github.com/testacular/) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Testacular (`sudo npm install -g testacular`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Testacular server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/testacular.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `/e2e/*-e2e.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* run the tests from console with [Testacular](vojtajina.github.com/testacular) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`


### Receiving updates from upstream

When we upgrade angular-sprout repo with newer angular or testing library code, you can just
fetch the changes and merge them into your project with git.


## Directory Layout

    app/                					--> all of the files to be used in production
      application/      					--> application module
        application.css 					--> default stylesheet
        application.js						--> application bootstrap
        configuration-service.js	--> application wide settings
      date-time/      						--> date-time module
        to-datetime-string.css 		--> default stylesheet
      details/      							--> details module
        details-controller.js			--> details view controller
        details-partial.js				--> details view partial
      error/      								--> details module
        error-controller.js				--> error view controller
        error-partial.js					--> error view partial
      menu/      									--> menu module
        menu-controller.js				--> menu control controller
        menu-partial.js						--> menue control partial
        menu-service.js						--> menu control service
        menu-item-directive.js		--> menu item control directive
        menu-item-template.html		--> menu item directive template
        items.json								--> item data
      index.html        					--> app layout file (the main html template file of the app)
      lib/              					--> angular and 3rd party javascript libraries
	      angular.js      					--> the latest angular js
	      angular.min.js  					--> the latest minified angular js
	      angular-*.js  						--> angular add-on modules

    config/testacular.conf.js     --> config file for running unit tests with Testacular
    config/testacular-e2e.conf.js --> config file for running e2e tests with Testacular

    scripts/            					--> handy shell/js/ruby scripts
      e2e-test.sh       					--> runs end-to-end tests with Testacular (*nix)
      e2e-test.bat      					--> runs end-to-end tests with Testacular (windows)
      test.bat          					--> autotests unit tests with Testacular (windows)
      test.sh           					--> autotests unit tests with Testacular (*nix)
      web-server.js    					 	--> simple development webserver based on node.js
      
    e2e/              						--> end to end tests are defined at the tob level as they are notbased on units of code.
      home-e2e.html     					--> end-to-end tests for the home page
      layout-e2e.js       				--> end to end test to verify the layout
