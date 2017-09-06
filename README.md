<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, you will be provided with a project skeleton for a DevMountain chat room. It will be up to you to hook up all the Angular files and build out the Angular controller and service to fetch messages from a live API. This project should provide good practice using a controller with a service that makes API calls using `$http`.

Live Example: <a href="#">Click Me!</a>

<b>Finished Image here</b>

## Step 1

### Summary

In this step, we'll hook up our Angular application, controller, and service into `index.html`.

### Instructions

* Open `index.html` and find the `<!-- your scripts here -->` comment.
* Add a new `script` tag for `js/app.js`.
* Add a new `script` tag for `js/mainCtrl.js`.
* Add a new `script` tag for `js/mainSrvc.js`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `index.html` and finding the `<!-- your scripts here -->`. This is the perfect spot to load in our Angular javascript files because it is just below the AngularJS CDN. We'll need to add a new `script` tag for all our Angular files in the `js/` folder.

```html
<script src="js/app.js"></script>
<script src="js/mainCtrl.js"></script>
<script src="js/mainSrvc.js"></script>
```

</details>

### Solution

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE HTML>
<html ng-app="chatroom">
  <head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body ng-controller="mainCtrl">
    <div class="main-container">
      <h1> DevMountain Chat Room </h1>
      <form>
        <input class="form-control text-box" type="text" ng-model="message" placeholder="Message">
      </form>
      <div class="messages-container">
        <p ng-repeat="message in messages ">
          {{message.message}} </p>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
    <!-- your scripts here -->
    <script src="js/app.js"></script>
    <script src="js/mainCtrl.js"></script>
    <script src="js/mainSrvc.js"></script>
  </body>
</html>
```

</details>

## Step 2

### Summary

In this step, we'll modify our Angular service to fetch messages from a live API.

### Instructions

* Open `js/mainSrvc.js`.
* Inject `$http` into the service.
* Create a method called `getMessages` that `returns` a `GET` call to `https://practiceapi.devmountain.com/api/chats`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `js/mainSrvc.js`. In order to make API calls, we'll need to inject `$http` into our Angular service. We can do this by adding `$http` as a parameter.

```js
angular.module('chatroom').service('mainSrvc', function( $http ) {

});
```

Now that we have access to `$http` we can make a method on the service that fetches the messages from the DevMountain Chat API. Remember that we need to return this `$http` call so our controller can work with a promise and put the messages on `$scope` as soon as they are available.

```js
angular.module('chatroom').service('mainSrvc', function( $http ) {
  this.getMessages = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/chats'
    });
  };
});
```

</details>

### Solution

<details>

<summary> <code> js/mainSrvc.js </code> </summary>

```js
angular.module('chatroom').service('mainSrvc', function( $http ) {
  this.getMessages = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/chats'
    });
  };
});
```

</details>

## Step 3

### Summary

In this step, we'll modify our Angular controller to communicate with our service to get the `messages` on `$scope`.

### Instructions

* Open `js/mainCtrl.js`.
* Inject `mainSrvc` into the controller.
* Call the `getMessages` method on `mainSrvc` and capture the `response`.
  * Create a new `$scope` variable called `messages` and set its value equal to the `data` of the `response`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `js/mainCtrl.js`. In order to get access to the methods on `mainSrvc`, we'll need to inject it into our `mainCtrl`. We can do this by adding a parameter in `js/mainCtrl.js` called `mainSrvc`.

```js
angular.module('chatroom').controller('mainCtrl', function( $scope, mainSrvc ){

});
```

Now the entire controller will have access to `mainSrvc`. Let's call the `getMessages` method and capture the response.

```js
angular.module('chatroom').controller('mainCtrl', function( $scope, mainSrvc ){
  mainSrvc.getMessages().then( function( response ) {
    
  });
});
```

We can then take the `data` of the response and assign it to a `$scope` value called `messages`. This will allow our `index.html` to display the `messages`.

```js
angular.module('chatroom').controller('mainCtrl', function( $scope, mainSrvc ){
  mainSrvc.getMessages().then( function( response ) {
    $scope.messages = response.data;
  });
});
```

</details>

### Solution

<details>

<summary> <code> js/mainCtrl.js </code> </summary>

```js
angular.module('chatroom').controller('mainCtrl', function( $scope, mainSrvc ){
  mainSrvc.getMessages().then( function( response ) {
    $scope.messages = response.data;
  });
});
```

</details>

## Step 4

### Summary

In this step, we'll modify the `HTML` to also display what time the message was created. Each message object has a property called `createdAt` which is the time the message was created at.

### Instructions

* Open `index.html`.
* Add the time the message was created at to the DOM.

### Solution

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE HTML>
<html ng-app="chatroom">
  <head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body ng-controller="mainCtrl">
    <div class="main-container">
      <h1> DevMountain Chat Room </h1>
      <form>
        <input class="form-control text-box" type="text" ng-model="message" placeholder="Message">
      </form>
      <div class="messages-container">
        <p ng-repeat="message in messages ">
          {{ message.message }} 

          {{ message.createdAt }}
        </p>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
    <!-- your scripts here -->
    <script src="js/app.js"></script>
    <script src="js/mainCtrl.js"></script>
    <script src="js/mainSrvc.js"></script>
  </body>
</html>
```

</details>

## Step 5

### Summary

In this step, we'll modify the `HTML` to make the messages sortable by the time they were created.

### Instructions

* Open `js/mainCtrl.js`.
* Create a new `$scope` variable called `timeSort`.
  * It should default to `"-"` ( so the newest messages show first ).
* Open `index.html`.
* Add a `select` element with a `ng-model` of `timeSort` next to the `input` element.
  * This `select` element should have to `option` elements. 
    * One for ascending ("+"). 
    * One for descending ("-").
* Modify the `ng-repeat` to include a sort on the `createdAt` property.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `js/mainCtrl.js` and add a new `$scope` variable called `timeSort`. We'll use this as the `ng-model` for ascending or descending our sorting. Since we want to display the newest messages first, let's default `timeSort` to `"-"`.

```js
$scope.timeSort = "-";
```

We can then open `index.html` and use a `select` element with two `option` elements to control the sorting of our messages. Let's add it next to the `input` element. We'll use `timeSort` as the `ng-model` for the `select` element. Also, don't forget that the `option` elements will need `value` attributes so they can update the `ng-model`.

```html
<form>
  <input class="form-control text-box" type="text" ng-model="message" placeholder="Message">
  <select ng-model="timeSort">
    <option value="-">Newest</option>
    <option value="+">Oldest</option>
  </select>
</form>
```

Now all we need to do is update the `ng-repeat` to have a `orderBy`. We can add this in using a `|`. Remember that `orderBy` ascendes or decsends by `+` or `-`. So if we want to order by the `createdAt` property, we'll need either `+createdAt` or `-createdAt`. We can make this dynamic using the `timeSort` `ng-model`. You'll need up with:

```html
<div class="messages-container">
  <p ng-repeat="message in messages | orderBy:timeSort + message.createdAt">
    {{ message.message }} 

    {{ message.createdAt }}
  </p>
</div>
```

</details>

### Solution

<details>

<summary> <code> js/mainCtrl.js </code> </summary>

```js
angular.module('chatroom').controller('mainCtrl', function( $scope, mainSrvc ){
    mainSrvc.getMessages().then( function( response ) {
      $scope.messages = response.data;
    });

    $scope.timeSort = "-";
});
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE HTML>
<html ng-app="chatroom">
  <head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body ng-controller="mainCtrl">
    <div class="main-container">
      <h1> DevMountain Chat Room </h1>
      <form>
        <input class="form-control text-box" type="text" ng-model="message" placeholder="Message">
        <select ng-model="timeSort">
          <option value="-">Newest</option>
          <option value="+">Oldest</option>
        </select>
      </form>
      <div class="messages-container">
        <p ng-repeat="message in messages | orderBy:timeSort + message.createdAt">
          {{ message.message }} 

          {{ message.createdAt }}
        </p>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
    <!-- your scripts here -->
    <script src="js/app.js"></script>
    <script src="js/mainCtrl.js"></script>
    <script src="js/mainSrvc.js"></script>
  </body>
</html>
```

</details>

## Step 6 

### Summary

In this step, we'll update the service file to have a method to post to the DevMountain Chat API. This will allow you to add your own messages. We'll then update the Angular controller to have a function on `$scope` that calls this method. Lastly, we'll update the `HTML` to be able to call this function on `$scope`.

### Instructions

* Open `js/mainSrvc.js`.
* Add a new method called `postMessage`: 
  * This method should have a parameter called `msg` ( this will be the string to send to the API ).
  * This method should return a `POST` call to `https://practiceapi.devmountain.com/api/chats`.
  * The API is expecting the request body to look like: `{ message: 'string' }`.
* Open `js/mainCtrl.js`.
* Create a new `$scope` function called `postMessage`:
  * This function should have a parameter called `msg` ( this will be the argument for the service method ).
  * This function should call `mainSrvc.postMessage` with `msg` as an argument.
* Open `index.html`.
  * Add an `ng-submit` to the `form` element that is the parent to the `input` element.
  * Use the `HTML` to determine what `ng-model` should be used for the argument.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `js/mainSrvc.js`. We're going to add a method to that will allow us to send a new message to the DevMountain Chat API. Let's name this method `postMessage` and give it a parameter called `msg`. `msg` will be the string we send to the API.

```js
this.postMessage = function( msg ) {

};
```

The API is expecting a post request at `https://practiceapi.devmountain.com/api/chats` with a request body that looks like `{ message: 'string' }`. You can include a request body by adding a `data` property in the `$http` request.

```js
this.postMessage = function( msg ) {
  return $http({
    method: 'POST',
    url: 'https://practiceapi.devmountain.com/api/chats',
    data: { message: msg }
  });
};
```

Now that the `service` is setup for new messages, let's open `js/mainCtrl.js` and add a new function on `$scope` that calls this method. This function should have a parameter of `msg` as well. We'll use the value of this parameter as the argument for the `postMessage` method in `js/mainSrvc.js`.

```js
$scope.postMessage = function( msg ) {
  mainSrvc.postMessage( msg );
};
```

Lastly, we'll just need to add an `ng-submit` on the `form` parent of the `input` element. Open `index.html` and add an `ng-submit` that calls `postMessage` with `message` as an argument. The reason we are using `message` as the argument is because it is the `ng-model` for the input element. 

```html
<form ng-submit="postMessage(message)">
```

</details>

### Solution

<details>

<summary> <code> js/mainSrvc.js </code> </summary>

```js
angular.module('chatroom').service('mainSrvc', function( $http ) {
  this.getMessages = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/chats'
    });
  };

  this.postMessage = function( msg ) {
    return $http({
      method: 'POST',
      url: 'https://practiceapi.devmountain.com/api/chats',
      data: { message: msg }
    });
  };
});
```

</details>

<details>

<summary> <code> js/mainCtrl.js </code> </summary>

```js
angular.module('chatroom').controller('mainCtrl', function( $scope, mainSrvc ){
    mainSrvc.getMessages().then( function( response ) {
      $scope.messages = response.data;
    });

    $scope.timeSort = "-";

    $scope.postMessage = function( msg ) {
      mainSrvc.postMessage( msg );
    };
});
```

</details>

<details>

<summary> <code> index.html </code> </summary>

```html
<!DOCTYPE HTML>
<html ng-app="chatroom">
  <head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body ng-controller="mainCtrl">
    <div class="main-container">
      <h1> DevMountain Chat Room </h1>
      <form ng-submit="postMessage(message)">
        <input class="form-control text-box" type="text" ng-model="message" placeholder="Message">
        <select ng-model="timeSort">
          <option value="-">Newest</option>
          <option value="+">Oldest</option>
        </select>
      </form>
      <div class="messages-container">
        <p ng-repeat="message in messages | orderBy:timeSort + message.createdAt">
          {{ message.message }} 

          {{ message.createdAt }}
        </p>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
    <!-- your scripts here -->
    <script src="js/app.js"></script>
    <script src="js/mainCtrl.js"></script>
    <script src="js/mainSrvc.js"></script>
  </body>
</html>
```

</details>

## Black Diamond

* Make the app look more professional using CSS.
* Clear the input field when sending a new message.
* Re-fetch the messages after sending a new message.
* Fetch messages automatically every second.
  * Hint: setTimeout.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>