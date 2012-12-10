Mocha Boilerplate
========

This is a boilerplate repo for mocha based unit testing. The primary objective is to provide a base example of how to setup a testing environment and be a single point where we can discuss and improve our process and coding practices using mocha. _This is a product of what I learned at Roost Boston_

### So what's going on here?

The idea is that we are testing our code and thinking about how our code is supposed to work before we actually write a single line. There are a couple of methods of testing that are supported by mocha and encouraged; tdd (test driven development) and bdd (behavior driven development);

**TDD** is Test Driven Development. This means writing a test that fails because the specified functionality doesn’t exist, then writing the simplest code that can make the test pass, then refactoring to remove duplication, etc. You repeat this Red-Green-Refactor loop over and over until you have a complete feature.


**BDD** is Behavior Driven Development. This means creating an executable specification that fails because the feature doesn’t exist, then writing the simplest code that can make the spec pass. You repeat this until a release candidate is ready to ship.

Both of these approaches have their value and have a place in your tests. 

### What are all these libraries?

**Mocha:** Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser. It is just the framework and can be usued with a number of different assertion libraries according to your preferences. It integrates with grunt which can provide a very fluid testing process.

**Chai:** Chai is a BDD / TDD assertion library for node and the browser that
can be delightfully paired with any javascript testing framework.

**Chai jQuery:** chai-jquery is an extension to the chai assertion library that
provides a set of jQuery-specific assertions.

**Sinon:** Standalone and test framework agnostic JavaScript test spies, stubs and mocks. _Primary use is to provide fake ajax requests for testing_

### How to install?

```shell
## First clone down the repo into your project in a test folder
git clone git@github.com:brandon-vaughan/mocha-bp.git --recursive test

## If already installed updated submodules
git submodule update --init --recursive
```

### How to get started?

All tests are run from runner. You can run tests via the comman-line with grunt or run them in the browser at test/runner/

I have setup the test to initial use require.js as the loader. Require is not needed at all but you should be using it and if you are going to use it you will need to update paths. 

**Update Paths** _runner/index.html_
```html
<!-- update paths to require and config at bottom of page -->
<script src="/path/to/require.js" data-main="/path/to/config"></script>
```

**Add and Update Tests** _list-of-tests.js_
```javascript
// this is a simple array with your test paths lists.
// the config.js will loop through each of these and run your mocha tests
define(function() {
  return [
    'tests/example'
  ];
});
```
### Now how do I write a test?

The basic idea when using a tdd approach is red > green > refactor. So you will 

**Create module and test files** _keep names the same for readability_
```shell
## module file: /build/app/example.js
## test file: /test/tests/example.js
```
**Add your base test**
```javascript
// define ( 'path/to/module/dependency', function( moduleReturn ) )
define( 'build/app/example', function( Example ) {

  // tdd: create a suite of tests
  suite('example', function() {

    // add test( 'note to user running test')
    test('Example exists', function() {

      var testExample = new Example();

      // assert test
      assert(textExample, 'Example created';

    });

  });

});
```

**Red:** This will return an error as you haven't return any object in build/app/example

**Now fix the error** _edit build/app/example.js
```javascript
// anonymous defintion for require module
define(function() {
  
  // Create our Example object
  var Example = function() {};

  // return object
  return Example;

});
```

**Green:** Now we are returning the example so we can proceed

**Refactor:** Now write the next test and check for the red light