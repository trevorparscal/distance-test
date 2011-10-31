function isTheDreamOfThe90sAlive(lat, lon) {
	lat -= 45.52;
	lon -= -122.68;
	return Math.sqrt((lat * lat) + (lon * lon)) <= 0.1;
}
