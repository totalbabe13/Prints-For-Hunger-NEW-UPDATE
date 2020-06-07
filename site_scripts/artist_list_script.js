if (document.body.clientWidth > 813) {
console.log("artist list hover script");

	let linkCollection = document.getElementsByClassName('link');
	for (var i = 0; i < linkCollection.length; i++) {
		linkCollection[i].addEventListener("mouseover", function(event) {
			let dataId = event.target.dataset.id;
			let linkedImage = document.querySelector(`[data-image-id="${dataId}"]`)
			console.log(linkedImage);
			if (linkedImage) {
				linkedImage.style.display = "inline";
				linkedImage.style.maxWidth = "2000px"
			}
		})
	}
	for (var i = 0; i < linkCollection.length; i++) {
		linkCollection[i].addEventListener("mouseout", function(event) {
			let dataId = event.target.dataset.id;
			let linkedImage = document.querySelector(`[data-image-id="${dataId}"]`)
			if (linkedImage) {
				linkedImage.style.display = "none";
			}
		})
	}
}
