module('Distance Calculation');

test( 'isTheDreamOfThe90sAlive', 5, function() {
	var tests = {
		'The dream is alive in NW Portland': [45.57, -122.73, true],
		'The dream is alive in NE Portland': [45.57, -122.63, true],
		'The dream is alive in SW Portland': [45.47, -122.73, true],
		'The dream is alive in SE Portland': [45.47, -122.63, true],
		'The dream is not alive in Beaverton': [45.48, -122.80, false]
	};
	for ( var key in tests ) {
		equal( isTheDreamOfThe90sAlive( tests[key][0], tests[key][1] ), tests[key][2], key );
	}
} );
