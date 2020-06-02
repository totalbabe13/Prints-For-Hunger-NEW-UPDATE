let imageGrid      = document.getElementsByClassName('image-grid')[0];
let imageCells     = document.getElementsByClassName('image-cell');

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};


let shuffled = shuffle(Array.prototype.slice.call(imageCells))


while(imageGrid.firstChild) {
  imageGrid.removeChild(imageGrid.firstChild)
}

shuffled.map( x => imageGrid.appendChild(x))


