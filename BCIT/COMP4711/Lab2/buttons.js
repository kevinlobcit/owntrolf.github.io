function callAlert(btn) {
		alert(btn.value);
	}

	function makeButton(letter) {
		let btn = document.createElement("BUTTON");
		btn.setAttribute("onclick", "callAlert(this)");
		btn.value = letter;
		btn.style.width = '30px';
		let text = document.createTextNode(letter);
		btn.appendChild(text);
		return btn;
	}

	function makeButtonsArray(array) {
		for(let i = 0; i < array.length; i++)
		{
			document.getElementById("content").appendChild(makeButton(array[i]));
			if((i - 65+1)%13===0) {
				let br = document.createElement('br');
				document.getElementById("content").appendChild(br);
			}
		}
	}
	
	var arrayText = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	makeButtonsArray(arrayText);