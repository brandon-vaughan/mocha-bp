/*global mocha:true, chai:true */

(function() {

// test mode -- 'tdd', 'bdd-should', or 'bdd-expect'
var mode = 'tdd';

if ( mode === 'tdd' ) {
  window.assert = chai.assert;
}

if ( mode === 'bdd-should' ) {
  window.should = chai.should();
}

if ( mode === 'bdd-expect' ) {
  window.expect = chai.expect;
}

mocha.setup( mode.split('-')[0] );

require( [ 'list-of-tests' ], function( lot ) {
  require( lot, function() {
    mocha.run();
  });
});

}());