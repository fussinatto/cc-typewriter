var input = document.getElementById("textinput");
var container = document.getElementById('container');


function newSpan (key) {
	var span = document.createElement('span');
	span.textContent = key;
	return span;
}

input.addEventListener('keypress',function (event) {
	event.preventDefault();
	var charCode = event.charCode || event.which;

	//mozilla hack
	if (charCode == 8 || charCode == 0) {
		return false;
	}

	var keychar = String.fromCharCode(charCode);

	container.appendChild(newSpan(keychar));

})

// Backspace & Delete function
input.addEventListener('keyup',function (event) {
	var keyCode = event.keyCode || event.which;

	if (keyCode == 8 || keyCode == 46) {
		container.removeChild(container.lastElementChild);
		return false;
	}
})

document.addEventListener('click',function () {
	input.focus();
})

