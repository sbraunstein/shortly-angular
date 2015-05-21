angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  var getLinks = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      console.log('service.js: Links: getLinks: GET response: ',resp)
      console.log('service.js: Links: getLinks: GET response.data: ', resp.data)
      return resp.data;
    }); 
  }
    var addToLinks = function (url) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: url
    })
    .then(function (resp) {
      console.log('service.js: Links: addToLinks: POST response: ',resp)
      console.log('service.js: Links: addToLinks: POST response.data: ', resp.data)
      return resp.data;
    })
    .catch(function(oops){
      console.log('ERROR: service.js: Links: addToLinks: POST oops', oops)
    })
  }
  return {
          getLinks: getLinks,
          addToLinks: addToLinks
        }
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      console.log('INSIDE SINGUP PROMISE RESPONSE', resp.data)
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
