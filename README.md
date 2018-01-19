<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, you will finish an Angular travel application. You will setup the routes and sub routes for the application as well as practice the fundamentals of Angular some more. 

# Live Example

<a href="https://devmountain.github.io/angular-2-afternoon/">Click Me!</a>

## Setup

* Fork and clone this repository
* `cd` into the project directory.
* Run `npm install`.
* After `npm install`, run `npm run dev`.
  * Go to provided URL by `live-server` in your browser if it doesn't automatically open a browser window.

<img src="https://github.com/devmountain/angular-2-afternoon/blob/solution/readme-assets/1.png" />

## Step 1

### Summary

In this step, you'll familarize yourself with the existing code base. Pay attention to file structure and what code is already created for you. The Angular application and first route have been created in `app/app.js`. There is also a service file ( `app/mainSrvc.js` ) that is given to you. There are also various controllers and templates already created throughout the `app` folder.

### Instructions

* Take as much time as you need to familiarize yourself with the project.

## Step 2

### Summary

In this step, we'll configure the router to handle all the other provided templates. The over provided templates are located in the feature folders ( `about`, `booked`, `locations`, `packages` ) in `app/`.

### Instructions

* Open `app/app.js`.
* Add the following new routes to the `config`:
  * Name: `packages` - Url: `/packages/:country` - Template: `app/packages/packagesTmpl.html`.
  * Name: `locations` - Url: `/locations` - Template: `app/locations/locationsTmpl.html`.
  * Name: `booked` - Url: `/booked/:id` - Template: `app/booked/bookedTmpl.html`.
  * Name: `adventurers` - Url: `/adventurers` - Template: `app/about/adventurers/adventurersTmpl.html`.
    * This route should be a sub-route of the home page.
  * Name: `contact` - Url: `/contact` - Template: `app/contact/contactTmpl.html`.
    * This route should be a sub-route of the home page.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/app.js`. In order for a user to navigate our Angular application, we'll need to add the remaining views into our router configuration. We can add more routes to our configuration by chaining on more `.state`s. All our additions will look similiar except for `adventurers` and `contact`. These routes will also include a `parent` property. The `parent` property is what distinguishes a sub-route from a route. We'll assign the parent as `home` to make them sub-routes of `home`.

Let's add a route for `packages` by chaining on another `.state`:

```js
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html'
    })
```

This would look the same for `locations` and `booked`:

```js
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html'
    })
```

And then finally we can add the route for `adventurers` and `contact` which will have a `parent` of `home`:

```js
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html'
    })
    .state('adventurers', {
      url: '/adventurers',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/about/contact/contactTmpl.html',
      parent: 'home'
    });
```

</details>

### Solution

<details>

<summary> <code> app/app.js </code> </summary>

```js
angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html'
    })
    .state('adventurers', {
      url: '/adventurers',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/about/contact/contactTmpl.html',
      parent: 'home'
    });

  $urlRouterProvider
    .otherwise('/');
});
```

</details>

## Step 3

### Summary

In this step, we'll create Angular controllers for `locations`, `packages`, and `booked`. We'll then assign the new controllers to our router configuration.

### Instructions

* Create a new controller file in:
  * `app/locations/`.
  * `app/packages/`.
  * `app/booked/`.
* Open `index.html`.
* Add `script` tags for each new controller in `index.html`.
* Open `app/app.js`.
* Assign the `locationCtrl` to the `locations` route.
* Assign the `packagesCtrl` to the `packages` route.
* Assign the `bookedCtrl` to the `booked` route.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by creating an empty controller file in `app/locations/`, `app/packages/`, and `app/booked/`. The file names I chose to use were `locationsCtrl.js`, `packagesCtrl.js`, and `bookedCtrl.js`. Inside each of these files, we can create an empty controller file for the `devmtnTravel` Angular application.

```js
angular.module('devmtnTravel').controller('controllerName', function( $scope ) {

});
```

Be sure to replace `controllerName` with the name of the controller. I used these names: `locationsCtrl`, `packagesCtrl`, and `bookedCtrl`. Now that our controllers are created, we'll need to import them into `index.html`. Let's add three `script` tags underneath `<!--Our Custom Script Files-->`.

```html
<script src="app/locations/locationsCtrl.js"></script>
<script src="app/packages/packagesCtrl.js"></script>
<script src="app/booked/bookedCtrl.js"></script>
```

We can then assign these controllers to routes in our router configuration. We'll assign `locationCtrl` to the locations route, `packagesCtrl` to the packages route, and `bookedCtrl` to the booked route.

```js
.state('packages', {
  url: '/packages/:country',
  templateUrl: 'app/packages/packagesTmpl.html',
  controller: 'packagesCtrl'
})
.state('locations', {
  url: '/locations',
  templateUrl: 'app/locations/locationsTmpl.html',
  controller: 'locationsCtrl'
})
.state('booked', {
  url: '/booked/:id',
  templateUrl: 'app/booked/bookedTmpl.html',
  controller: 'bookedCtrl'
})
```

</details>

### Solution

<details>

<summary> <code> app/locations/locationCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('locationsCtrl', function( $scope ) {

});
```

</details>

<details>

<summary> <code> app/packages/packagesCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('packagesCtrl', function( $scope ) {

});
```

</details>

<details>

<summary> <code> app/booked/bookedCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('bookedCtrl', function( $scope ) {

});
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en" ng-app="devmtnTravel">
  <head>
    <title>DevMtn Travels</title>

    <!-- META INFO -->
    <meta charset="UTF-8">
    <meta name="description" content="DevMtn Travels app using ui-routes ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--RESET FILE -->
    <link rel="stylesheet" href="reset.css">

    <!--MAIN FILE-->
    <link rel="stylesheet" href="styles.css">

    <!-- View Styles -->
    <link rel="stylesheet" href="app/about/about.css">
    <link rel="stylesheet" href="app/about/adventurers/adventurers.css">
    <link rel="stylesheet" href="app/about/contact/contact.css">
    <link rel="stylesheet" href="app/locations/locations.css">
    <link rel="stylesheet" href="app/packages/packages.css">
    <link rel="stylesheet" href="app/booked/booked.css">
  </head>

  <body>
    <main role="main">
      <section class="home-page-top-container">
        <header>
          <nav>
            <ul>
              <!--Navigation Section-->
              <li><a>Locations</a></li>
              <li><a>Packages</a></li>
              <li><a><img src="img/DevCircleWhite.svg" alt="DevMountain Logo"></a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </header>
        <h1 class="intro-text">Discover</h1>
      </section>

      <!-- Here we are placing the ui-view tag this is where our views will be injected when we change routes. -->

      <ui-view></ui-view>

    </main>

    <!-- Including angular and ui-router then our javascript files. ORDER MATTERS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/locations/locationsCtrl.js"></script>
    <script src="app/packages/packagesCtrl.js"></script>
    <script src="app/booked/bookedCtrl.js"></script>
  </body>
</html>
```

</details>

<details>

<summary> <code> app/app.js </code> </summary>

```js
angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html',
      controller: 'packagesCtrl'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html',
      controller: 'locationsCtrl'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html',
      controller: 'bookedCtrl'
    })
    .state('adventurers', {
      url: '/adventurers',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/about/contact/contactTmpl.html',
      parent: 'home'
    });

  $urlRouterProvider
    .otherwise('/');
});
```

</details>

## Step 4

### Summary

In this step, we'll test the controllers we just made to make sure everything is hooked up correctly.

### Instructions

* Inside each controller we made in the previous step, add a new `$scope` variable called `test` and set it equal to some string.
* Open all three template files ( `locationsTmpl.html`, `packagesTmpl.html`, `bookedTmpl.html` ):
  * Add `{{ test }}` somewhere in the HTML.
* In your browser, using the address bar, manually go to each route and make sure `$scope.test` is appearing on the DOM.
* Once you can successfully see the value of `$scope.test` on each view:
  * Remove `{{ test }}` from each template HTML file.
  * Remove `$scope.test` from each controller file.

### Solution

<img src="https://github.com/devmountain/angular-2-afternoon/blob/solution/readme-assets/1g.gif" />

## Step 5

### Summary

In this step, we'll hook up the `ui-sref`'s in the template HTML files to allow the user to navigate the application. Since there are comments in the code file themselves, there wont be any detailed instructions on this step.

### Instructions

* Open each template HTML file and locate the comment explaining the `ui-sref`.
  * Don't worry about the `id` and `country` for the `booked` and `packages` route in this step.
* Open `index.html`.
* Locate the  `<!--Navigation Section-->` comment.
  * Add `ui-sref` tags to the correct view.
    * Locations should route to `locations`.
    * Packages should route to `packages`.
    * The logo shouldn't have a route.
    * About should route to `home`.
    * Contact should route to `contact`.

### Solution

<details>

<summary> <code> app/about/adventurers/adventurersTmpl.html </code> </summary>

```html
<section class="adventurers-main">
  <h1>WE ARE THE <em style="color:#12F0F0">ADVENTURERS</em></h1>

  <section class="adventurers-inner">
    <section class="adventure-card">
      <img src="img/Grizzly-Adams.jpg" alt="Grizzly Adams">
      <h2>Grizzly Adams</h2>
      <p>Shabby chic 90's drinking vinegar irony kombucha meh. Fashion axe 8-bit everyday carry, locavore shabby chic small batch tote bag salvia ugh semiotics keffiyeh intelligentsia.</p>
    </section>

    <section class="adventure-card">
      <img src="img/Rally-Sisters.jpg" alt="Rally Sisters">
      <h2>Rally Sisters</h2>
      <p>Shabby chic 90's drinking vinegar irony kombucha meh. Fashion axe 8-bit everyday carry, locavore shabby chic small batch tote bag salvia ugh semiotics keffiyeh intelligentsia.</p>
    </section>
  </section>

  <!--This button needs a ui-sref that points to packages-->
  <button ui-sref="packages">View Packages</button>
</section>

```

</details>

<details>

<summary> <code> app/about/aboutTmpl.html </code> </summary>

```html
<section class="about-main">
  <div class="about-image">
      <img src="img/About-img.jpg" alt="About Page Image">
  </div>

  <ui-view class="about-inner-right">
    <section class="about-inner-intro">
      <h1>WE ARE A GROUP OF <em style="color:#12F0F0">ADVENTURERS</em></h1>
      <p>Maecenas rhoncus elit et mattis placerat. In aliquam eu velit gravida vulputate. Cras facilisis augue quis velit ultrices luctus. Duis eu turpis massa. Morbi iaculis porttitor feugiat. Suspendisse sit amet metus vulputate, fermentum sapien et, mollis massa. Quisque condimentum nunc vel nisl pellentesque, nec dapibus urna pulvinar. Nulla ac nisl arcu. Integer tincidunt mauris sed libero malesuada consequat. Vestibulum sodales lacus ornare, lobortis metus quis, laoreet eros. Duis tristique ligula sit amet malesuada accumsan. Nunc et metus maximus, faucibus magna quis, accumsan arcu. Nullam eleifend pretium vestibulum. Suspendisse nec diam lacus. Aliquam consequat tincidunt risus, et rutrum risus vehicula at.</p>

      <!--This button needs a ui-sref that points to adventurers-->
      <button ui-sref="adventurers"> MEET THE ADVENTURERS </button>
    </section>
  </ui-view>
</section>
```

</details>

<details>

<summary> <code> app/booked/bookedTmpl.html </code> </summary>

```html
<section class="booked-main-container" >
  <h1>Thanks for trusting us with your trip to <br>   <!-- Data bind the city name here --> </h1>

  <!--This button needs a ui-sref that points to packages -->
  <button ui-sref="packages"> VIEW MORE PACKAGES </button>
</section>
```

</details>

<details>

<summary> <code> app/locations/locationsTmpl.html </code> </summary>

```html
<section class="locations-container">
  <section class="location-card" >
    <div class="image-container">
      <img ng-src="" alt="">
    </div>

    <div class="location-inner-left">
      <h1></h1>
      <p></p>
    </div>

    <div class="location-inner-right">
      <h3>Package Start At $<!--The package price goes here--></h3>
      
      <!--This button needs a ui-sref that points to packages-->
      <button ui-sref="packages">See country packages</button>
    </div>
  </section>
</section>
```

</details>

<details>

<summary> <code> app/packages/packagesTmpl.html </code> </summary>

```html
<section class="packages-main">
  <!-- This is where we need to repeat over our "packageInfo" data that we are getting from our controller. The controller is getting the data from the service. If you haven't made the controller do that now and include it on your state object in app.js-->
  <section class="package-card">
    <!-- Once we have the data we can use {{}} to bind that data to our view -->
    <!--Add the image link from the data here using ng-src. Remember to put something in the alt tag, perhaps the name of the city-->
    <img alt="">
    <!-- Now we can start to extract the data and bind it to our different elements here-->
    <h6> <!--The city name goes here--> </h6>
    <h1><!--The country name goes here--></h1>
    <p><!--The description goes here--></p>
    <h3>$<!--The package price goes here--></h3>

    <!--This button needs a ui-sref that points to booked-->
    <button ui-sref="booked">Book Now</button>
  </section>
</section>
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en" ng-app="devmtnTravel">
  <head>
    <title>DevMtn Travels</title>

    <!-- META INFO -->
    <meta charset="UTF-8">
    <meta name="description" content="DevMtn Travels app using ui-routes ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--RESET FILE -->
    <link rel="stylesheet" href="reset.css">

    <!--MAIN FILE-->
    <link rel="stylesheet" href="styles.css">

    <!-- View Styles -->
    <link rel="stylesheet" href="app/about/about.css">
    <link rel="stylesheet" href="app/about/adventurers/adventurers.css">
    <link rel="stylesheet" href="app/about/contact/contact.css">
    <link rel="stylesheet" href="app/locations/locations.css">
    <link rel="stylesheet" href="app/packages/packages.css">
    <link rel="stylesheet" href="app/booked/booked.css">
  </head>

  <body>
    <main role="main">
      <section class="home-page-top-container">
        <header>
          <nav>
            <ul>
              <!--Navigation Section-->
              <li><a ui-sref="locations">Locations</a></li>
              <li><a ui-sref="packages">Packages</a></li>
              <li><a><img src="img/DevCircleWhite.svg" alt="DevMountain Logo"></a></li>
              <li><a ui-sref="home">About</a></li>
              <li><a ui-sref="contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <h1 class="intro-text">Discover</h1>
      </section>

      <!-- Here we are placing the ui-view tag this is where our views will be injected when we change routes. -->
      <ui-view></ui-view>

    </main>

    <!-- Including angular and ui-router then our javascript files. ORDER MATTERS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/locations/locationsCtrl.js"></script>
    <script src="app/packages/packagesCtrl.js"></script>
    <script src="app/booked/bookedCtrl.js"></script>
  </body>
</html>
```

</details>

<br />

<img src="https://github.com/devmountain/angular-2-afternoon/blob/solution/readme-assets/2g.gif" />

## Step 6

### Summary

In this step, we'll setup the `mainSrvc` to call on a live API for travel and package data and then add it to the list of `scripts` in `index.html`.

### API Documentation

* GET - `https://practiceapi.devmountain.com/api/travel/travel-info`:
  * Returns an array of travel objects. Travel objects contain the following properties:
    * `country` - String. 
    * `image` - String ( a filepath to a specific image in the `img/` folder ).
    * `desc` - String.
    * `price` - Number.
* GET - `https://practiceapi.devmountain.com/api/travel/package-info`:
  * Returns an array of package objects. Package objects contain the following properties:
    * `city` - String.
    * `country` - String.
    * `desc` - String.
    * `id` - Number.
    * `image` - String ( a filepath to a specific image in the `img/` folder ).
    * `price` - Number.

### Instructions

* Open `app/mainSrvc.js`.
* Inject `$http` into the service.
* Create two methods on the service:
  * Each method should return a promise of a `$http` get call. 
  * Use the API documentation above for help.
  * Use the following names for your methods: `getTravelInfo` and `getPackageInfo`.
* Add `app/mainSrvc.js` as a new `script` in `index.html`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/mainSrvc.js` and injecting `$http` into it. This will allow us to make API calls. 

```js
angular.module('devmtnTravel').service('mainSrvc', function( $http ) {

}
```

We'll need two methods in this service. One for hitting the `travel-info` endpoint and one for hitting the `package-info` endpoint. The `travel-info` endpoint will give us the data we'll need to populate the `locations` template and the `package-info` endpint will give us the data we'll need to populate the `packages` template. Let's start by just creating the skeleton of the two methods. We'll be using the names `getTravelInfo` and `getPackageInfo` for them.

```js
angular.module('devmtnTravel').service('mainSrvc', function( $http ) {
  this.getTravelInfo = function() {
    
  }

  this.getPackageInfo = function() {

  }
}
```

We want to design these methods so they return a promise. This will allow us to do asynchronous code in the `controllers`. Luckily, `$http` can do this for us. When calling `$http` it automagically returns a promise. Knowing this, we can have our functions `return` the `$http` call. Using the API documentation above, we know we need to make a `GET` call on the following URLs: `https://practiceapi.devmountain.com/api/travel/travel-info` and `https://practiceapi.devmountain.com/api/travel/package-info`:

```js
angular.module('devmtnTravel').service('mainSrvc', function( $http ) {
  this.getTravelInfo = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/travel/travel-info'
    });
  };

  this.getPackageInfo = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/travel/package-info'
    });
  };
});
```

Now that the service is completed, let's add it into `index.html` so our controllers will be able to inject and use it.

```html
<script src="app/mainSrvc.js"></script>
```

</details>

### Solution

<details>

<summary> <code> app/mainSrvc.js </code> </summary>

```js
angular.module('devmtnTravel').service('mainSrvc', function( $http ) {
  this.getTravelInfo = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/travel/travel-info'
    });
  };

  this.getPackageInfo = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/travel/package-info'
    });
  };
});
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en" ng-app="devmtnTravel">
  <head>
    <title>DevMtn Travels</title>

    <!-- META INFO -->
    <meta charset="UTF-8">
    <meta name="description" content="DevMtn Travels app using ui-routes ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--RESET FILE -->
    <link rel="stylesheet" href="reset.css">

    <!--MAIN FILE-->
    <link rel="stylesheet" href="styles.css">

    <!-- View Styles -->
    <link rel="stylesheet" href="app/about/about.css">
    <link rel="stylesheet" href="app/about/adventurers/adventurers.css">
    <link rel="stylesheet" href="app/about/contact/contact.css">
    <link rel="stylesheet" href="app/locations/locations.css">
    <link rel="stylesheet" href="app/packages/packages.css">
    <link rel="stylesheet" href="app/booked/booked.css">
  </head>

  <body>
    <main role="main">
      <section class="home-page-top-container">
        <header>
          <nav>
            <ul>
              <!--Navigation Section-->
              <li><a ui-sref="locations">Locations</a></li>
              <li><a ui-sref="packages">Packages</a></li>
              <li><a><img src="img/DevCircleWhite.svg" alt="DevMountain Logo"></a></li>
              <li><a ui-sref="home">About</a></li>
              <li><a ui-sref="contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <h1 class="intro-text">Discover</h1>
      </section>

      <!-- Here we are placing the ui-view tag this is where our views will be injected when we change routes. -->
      <ui-view></ui-view>

    </main>

    <!-- Including angular and ui-router then our javascript files. ORDER MATTERS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

    <!--Our Custom Script Files-->
    <script src="app/app.js"></script>
    <script src="app/locations/locationsCtrl.js"></script>
    <script src="app/packages/packagesCtrl.js"></script>
    <script src="app/booked/bookedCtrl.js"></script>
    <script src="app/mainSrvc.js"></script>
  </body>
</html>
```

</details>

## Step 7

### Summary

In this step, we'll complete the `booked` feature. The `booked` feature is designed to work by getting an `id` from the URL. It will then find the corresponding `package` object with the same `id` and assign that object on `$scope`.

### Instructions

* Open `app/booked/bookedTmpl.html` and `app/booked/bookedCtrl.js`.
* Inside of `bookedCtrl.js`: 
  * Inject `$stateParams` into the controller.
  * Inject `mainSrvc` into the controller.
  * Call the `getPackageInfo` method and catch the response:
    * Assign a new `$scope` variable called `allPackages` that equals the `response`'s `data`.
    * Find the `package` object with the `id` that matches the `id` on `$stateParams`:
      * Assign it to a new `$scope` variable called `package`.
* Inside of `bookedTmpl.html`:
  * Add an `ng-if` to the most parent element that equals "package".
  * Display the package's city followed by the package's country in the `h1` element.
    * Example: Bordeaux, France
  * Add an `ng-style` to the parent `section` element:
    * Set the `background-image` to the value of `image` on the package object.
  * Fix the `ui-sref` to include a country parameter that equals the package's country.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/booked/bookedCtrl.js` and get the data we need from `mainSrvc`. To do this we'll need to inject `mainSrvc` and then call its `getPackageInfo` method. We'll then want to capture its response and put our async logic inside of there. The first thing we'll want to do is assign `$scope.allPackages` to the `response`'s `data`.

```js
angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, mainSrvc ) {
  mainSrvc.getPackageInfo().then( function( response ) {
    $scope.allPackages = response.data;
  });
});
```

Using this packages array, we can search through it and find the package object that has the same `id` as the `id` in the URL. In order to be able to read the `id` from the URL, we'll need to inject `$stateParams` into the controller.

```js
angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
  mainSrvc.getPackageInfo().then( function( response ) {
    $scope.allPackages = response.data;
  });
});
```

Alright, time for some logic. We now have access to `$stateParams.id` ( the `id` in the URL ) and the packages array ( `$scope.allPackages` ). We can add an `if` statement to check if the page was loaded with an `id` in the URL. If it was, we can get the index of the package object in `$scope.allPackages` by using the `findIndex` Array method.

```js
angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
  mainSrvc.getPackageInfo().then( function( response ) {
    $scope.allPackages = response.data;

    if ( $stateParams.id ) {
      $scope.packageIndex = $scope.allPackages.findIndex( function( package ) {
        return package.id === parseInt( $stateParams.id );
      }); 
    }
  });
});
```

`$scope.packageIndex` will either be assigned the `index` of the package object in `$scope.allPackages` or `-1` if it is not found in the array. We can use this as another conditional to assign a new `$scope` variable called `$scope.package`.

```js
angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
  mainSrvc.getPackageInfo().then( function( response ) {
    $scope.allPackages = response.data;

    if ( $stateParams.id ) {
      $scope.packageIndex = $scope.allPackages.findIndex( function( package ) {
        return package.id === parseInt( $stateParams.id );
      }); 
  
      if ( $scope.packageIndex !== -1 ) {
        $scope.package = $scope.allPackages[ $scope.packageIndex ];
      }
    }
  });
});
```

Now that our controller is setup, we can open the template HTML and add the package's `city` and `country` to the DOM. We'll also add a `ng-style` to the parent `section` element to set the `background-image` to the package's `image`. When using `ng-style` the syntax follows: `{ 'css-property': 'css-value' }`. You can use `{{}}` to insert `$scope.values` into `ng-style`.

```html
<section class="booked-main-container" ng-style="{ 'background-image': 'url({{ package.image }})' }">
  <h1>Thanks for trusting us with your trip to <br>  {{ package.city }}, {{ package.country }}</h1>

  <!--This button needs a ui-sref that points to packages -->
  <button ui-sref="packages"> VIEW MORE PACKAGES </button>
</section>
```

We'll also want to add an `ng-if` to the `section` element. This way, the element wont be rendered until `$scope.package` exists. Otherwise, our `ng-style` won't work correctly. To add an `ng-if` we add it to an element as an attribute and assign it an expression. We can do a simple truthy check for `$scope.package`.

```html
<section ng-if="package" class="booked-main-container" ng-style="{ 'background-image': 'url({{ package.image }})' }">
  <h1>Thanks for trusting us with your trip to <br>  {{ package.city }}, {{ package.country }}</h1>

  <!--This button needs a ui-sref that points to packages -->
  <button ui-sref="packages"> VIEW MORE PACKAGES </button>
</section>
```

Finally, we'll need to update the `ui-sref` to link to the correct `packages` route. If we look in `app/app.js`, in our router configuration, we'll see that the `packages` route is expecting a `country` parameter. To add parameters in a `ui-sref` all we need to do is add `({ paramName: paramValue })` next to the route name. If we take a look at our data in `mainSrvc` we can see that our package objects have a `property` called country. Therefore, we can use `{{ package.country }}` in the DOM to fix our `ui-sref` link.

```html
<section ng-if="package" class="booked-main-container" ng-style="{ 'background-image': 'url({{ package.image }})' }">
  <h1>Thanks for trusting us with your trip to <br>  {{ package.city }}, {{ package.country }}</h1>

  <!--This button needs a ui-sref that points to packages -->
  <button ui-sref="packages({ country: '{{ package.country }}' })"> VIEW MORE PACKAGES </button>
</section>
```

</details>

### Solution

<details>

<summary> <code> app/booked/bookedTmpl.html </code> </summary>

```html
<section ng-if="package" class="booked-main-container" ng-style="{ 'background-image': 'url({{ package.image }})' }">
  <h1>Thanks for trusting us with your trip to <br>  {{ package.city }}, {{ package.country }}</h1>

  <!--This button needs a ui-sref that points to packages -->
  <button ui-sref="packages({ country: '{{ package.country }}' })"> VIEW MORE PACKAGES </button>
</section>
```

</details>

<details>

<summary> <code> app/booked/bookedCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
  mainSrvc.getPackageInfo().then( function( response ) {
    $scope.allPackages = response.data;

    if ( $stateParams.id ) {
      $scope.packageIndex = $scope.allPackages.findIndex( function( package ) {
        return package.id === parseInt( $stateParams.id );
      }); 
  
      if ( $scope.packageIndex !== -1 ) {
        $scope.package = $scope.allPackages[ $scope.packageIndex ];
      }
    }
  });
});
```

</details>

<br />

<img src="https://github.com/devmountain/angular-2-afternoon/blob/solution/readme-assets/3-1g.gif" />

## Step 8

### Summary

In this step, we'll complete the `locations` feature. The `locations` feature is designed to show all the available packages by `country`.

### Instructions

* Open `app/locations/locationsTmpl.html` and `app/locations/locationsCtrl.js`.
* Inside of `locationsCtrl.js`:
  * Inject `mainSrvc` into the controller.
  * Call the `getTravelInfo` method and catch the response:
    * Assign a new `$scope` variable called `locations` that equals the `response`'s `data`.
* Inside of `locationsTmpl.html`:
  * Add a `ng-repeat` through `locations` on the `section` element with the class of `location-card`.
    * Update the `img` element's `ng-src` to be the `location`'s image.
    * Update the `img` element's `alt` to be the `location`'s country.
    * Update the `h1` element's value to be the `location`'s country.
    * Update the `p` element's value to be the `location`'s desc.
  * Fix the `ui-sref` to include a country parameter that equals the `location`'s country.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin opening `app/locations/locationsCtrl.js` and get the data we need from `mainSrvc`. To do this we'll need to inject `mainSrvc` and then call its `getTravelInfo` method. We can then catch its `response` and assign its `data` to a new `$scope` variable called `locations`.

```js
angular.module('devmtnTravel').controller('locationsCtrl', function( $scope, mainSrvc ) {
  mainSrvc.getTravelInfo().then( function( response ) {
    $scope.locations = response.data;
  });
});
```

Now that our controller is setup, we can repeat through `locations` on the DOM. We'll want to update the `ng-src` to be the `location`'s image and the `alt` to be the `location`'s country on the `img` element. We'll also want to update the `h1` element to have a value of the `location`'s country and update the `p` element to have a value of the `location`'s desc.

```html
<section class="locations-container">
  <section class="location-card" ng-repeat="location in locations">
    <div class="image-container">
      <img ng-src="{{ location.image }}" alt="{{ location.country }}" />
    </div>

    <div class="location-inner-left">
      <h1>{{ location.country }}</h1>
      <p>{{ location.desc }}</p>
    </div>

    <div class="location-inner-right">
      <h3>Package Start At ${{ location.price }}</h3>
      
      <!--This button needs a ui-sref that points to packages-->
      <button ui-sref="packages">See country packages</button>
    </div>
  </section>
</section>
```

Lastly, we'll need to fix the `ui-sref` so that it properly calls the `packages` route with the `location`'s country.

```html
<!--This button needs a ui-sref that points to packages-->
<button ui-sref="packages({ country: '{{ location.country }}' })">See country packages</button>
```

</details>

### Solution

<details>

<summary> <code> app/locations/locationsCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('locationsCtrl', function( $scope, mainSrvc ) {
  mainSrvc.getTravelInfo().then( function( response ) {
    $scope.locations = response.data;
  });
});
```

</details>

<details>

<summary> <code> app/locations/locationsTmpl.html </code> </summary>

```html
<section class="locations-container">
  <section class="location-card" ng-repeat="location in locations">
    <div class="image-container">
      <img ng-src="{{ location.image }}" alt="{{ location.country }}" />
    </div>

    <div class="location-inner-left">
      <h1>{{ location.country }}</h1>
      <p>{{ location.desc }}</p>
    </div>

    <div class="location-inner-right">
      <h3>Package Start At ${{ location.price }}</h3>
      
      <!--This button needs a ui-sref that points to packages-->
      <button ui-sref="packages({ country: '{{ location.country }}' })">See country packages</button>
    </div>
  </section>
</section>
```

</details>

<br />

<img src="https://github.com/devmountain/angular-2-afternoon/blob/solution/readme-assets/4g.gif" />

## Step 9

### Summary

In this step, we'll complete the `packages` feature. The `packages` feature is designed to show all available packages by `country`.

### Instructions

* Open `app/packages/packagesTmpl.html` and `app/packages/packagesCtrl.js`.
* Inside of `packagesCtrl.js`:
  * Inject `$stateParams` into the controller.
  * Inject `mainSrvc` into the controller.
  * Call the `getPackageInfo` method and catch the response:
    * Assign a new `$scope` variable called `allPackages` that equals the `response`'s `data`.
    * Filter out the `packages` that equal the `country` specified in the URL into a new `$scope` variable called `packages`.
* Inside of `packagesTmpl.html`:
  * Add a `ng-repeat` through `packages` on the `section` element with the class name of `package-card`.
    * Update the `img` element's `ng-src` to be the `package`'s image.
    * Update the `img` element's `alt` to be the `package`'s country.
    * Update the `h6` element's value to be the `package`'s city.
    * Update the `h1` element's value to be the `package`'s country.
    * Update the `p` element's value to be the `package`'s desc.
    * Update the `h3` element's value to be the `package`'s price.
  * Fix the `ui-sref` to include an `id` parameter that equals the `package`'s `id`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `app/packages/packagesCtrl.js`. We'll need access to the `package` ID in the URL and access to the `getPackageInfo` method on `mainSrvc.js`. So let's inject `$stateParams` and `mainSrvc` into the controller.

```js
angular.module('devmtnTravel').controller('packagesCtrl', function( $scope, $stateParams, mainSrvc ) {

});
```

Now that we have access to these things, we can call then `getPackageInfo` and catch its `response`. Inside our catch, we can assign a new `$scope` variable called `allPackages` that equals the `response`'s `data`. We'll also need another `$scope` variable called `package`. We can determine the value of `package` by `filtering` `$scope.allPackages` by `country`. Remember that this page is loaded with a URL parameter called `country`.

```js
angular.module('devmtnTravel').controller('packagesCtrl', function( $scope, $stateParams, mainSrvc ) {
  mainSrvc.getPackageInfo().then( function( response ) {
    $scope.allPackages = response.data;

    if ( $stateParams.country ) {
      $scope.packages = $scope.allPackages.filter( function( package ) {
        return package.country === $stateParams.country;
      });
    }
  });
});
```

We can then use `$scope.packages` with an `ng-repeat` to show all the packages on the DOM. Let's open `app/packages/packagesTmpl.html` and locate the `section` element with the class of `package-card`. Let's add an `ng-repeat` through `packages` on this element. We will also the following elements inside of `package-card`:

* `img` element's `ng-src` to be the `package`'s image.
* `img` element's `alt` to be the `package`'s country.
* `h6` element's value to be the `package`'s city.
* `h1` element's value to be the `package`'s country.
* `p` element's value to be the `package`'s desc.
* `h3` element's value to be the `package`'s price.

```html
<section class="packages-main">
  <section class="package-card" ng-repeat="package in packages">
    <img ng-src="{{ package.image }}" alt="{{ package.country }}" />

    <h6>{{ package.city }}</h6>
    <h1>{{ package.country }}</h1>
    <p>{{ package.desc }}</p>
    <h3>${{ package.price }}</h3>

    <!--This button needs a ui-sref that points to booked-->
    <button ui-sref="booked">Book Now</button>
  </section>
</section>
```

Lastly, we'll need to update the value of the `ui-sref` to include the `package`'s id as a route parameter.

```html
<!--This button needs a ui-sref that points to booked-->
<button ui-sref="booked({ id: '{{ package.id }}' })">Book Now</button>
```

</details>

### Solution

<details>

<summary> <code> app/packages/packagesCtrl.js </code> </summary>

```js
angular.module('devmtnTravel').controller('packagesCtrl', function( $scope, $stateParams, mainSrvc ) {
  mainSrvc.getPackageInfo().then( function( response ) {
    $scope.allPackages = response.data;

    if ( $stateParams.country ) {
      $scope.packages = $scope.allPackages.filter( function( package ) {
        return package.country === $stateParams.country;
      });
    }
  });
});
```

</details>

<details>

<summary> <code> app/packages/packagesTmpl.html </code> </summary>

```html
<section class="packages-main">
  <section class="package-card" ng-repeat="package in packages">
    <img ng-src="{{ package.image }}" alt="{{ package.country }}" />

    <h6>{{ package.city }}</h6>
    <h1>{{ package.country }}</h1>
    <p>{{ package.desc }}</p>
    <h3>${{ package.price }}</h3>

    <!--This button needs a ui-sref that points to booked-->
    <button ui-sref="booked({ id: '{{ package.id }}' })">Book Now</button>
  </section>
</section>
```

</details>

<br />

<img src="https://github.com/devmountain/angular-2-afternoon/blob/solution/readme-assets/5g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
