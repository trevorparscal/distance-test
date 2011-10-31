function isTheDreamOfThe90sAlive(lat, lon) {
	// Move center to Portland, OR
	lat -= 45.52;
	lon -= -122.68;
	// Allow up to 0.1 degrees of distance
	return Math.sqrt((lat * lat) + (lon * lon)) <= 0.1;
}
