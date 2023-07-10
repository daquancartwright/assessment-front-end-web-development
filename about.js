console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// Alert the user that the form has been submitted
	alert('The form has been sumbitted')
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);



// Add an event listener that listens for a mouseover event. When the user mouses over the picture on the page (cat or rubber duck) the page should alert give the user a compliment.
function giveCompliment() {
	alert('You are Beautiful!')
}

let catPic = document.getElementById('catImage')
catPic.addEventListener('mouseover', giveCompliment)