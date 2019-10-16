let balloon = document.querySelector('#balloon');

const handler = function resizeBalloon(event){
	currentFontSize = window.getComputedStyle(balloon, null).getPropertyValue('font-size');
	
	if(event.keyCode == '73'){
		balloon.style.fontSize = (parseFloat(currentFontSize) + 10) + 'px';
	}
	else if(event.keyCode == '68'){
		balloon.style.fontSize = (parseFloat(currentFontSize) - 10) + 'px';
	}
	if(parseFloat(currentFontSize) > 59){
		balloon.textContent = '💥';
		document.removeEventListener('keyup', handler);
	}
	else if(parseFloat(currentFontSize) <= 0){
		balloon.textContent = 'Done.';
		balloon.style.fontSize = '30px';
		document.removeEventListener('keyup', handler);
	}
}

document.addEventListener("keyup", handler)