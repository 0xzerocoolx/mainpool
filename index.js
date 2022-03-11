'use strict';

// MODULES //

var tape = require( 'tape' );
var sqrt = require( '@stdlib/math-base-special-sqrt' );
var PHI = require( '@stdlib/constants-float64-phi' );
var SQRT_PHI = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof SQRT_PHI, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 1.272019649514069', function test( t ) {
	t.equal( SQRT_PHI, 1.272019649514069, 'equals 1.272019649514069' );
	t.end();
});

tape( 'the exported value equals sqrt(φ)', function test( t ) {
	t.equal( SQRT_PHI, sqrt(PHI), 'equals sqrt(φ)' );
	t.end();
});
