var data = 
	[
		{
			"question": "What would be the output of this script? <br/>" +
						"<br/>"+
						"<span style=\"color:red;\">let</span> sum = 0;<br/>" +
						"<span style=\"color:blue;\">for</span>(<span style=\"color:red;\">let</span> i = 0; i < 5; i++) {<br/>" +
						"&nbsp;&nbsp;&nbsp;&nbsp;sum = sum+1;<br/>"+
						"}<br/>" +
						"<br/>" +
						"<span style=\"color:blue;\">console</span>.log(sum);<br/>",
			"a1": "1",
			"a2": "2",
			"a3": "3",
			"a4": "5"
		} ,
		
		{
			"question": "How do you open the Chrome dev Tools",
			"a1": "Right click and inspect element",
			"a2": "Press F11",
			"a3": "Open new tab",
			"a4": "Close the tab"
		} ,
		
		{
			"question": "Does the order of where you put your Javascript in your HTML document matter?",
			"a1": "Yes",
			"a2": "No",
			"a3": "Both",
			"a4": "Has exceptions"
		} ,
		
		{
			"question": "How do you declare a string in Javascript",
			"a1": "var str = Kevin",
			"a2": "var str = \"Kevin\"",
			"a3": "var str =/Kevin/",
			"a4": "var str =~Kevin~"
		} ,
		
		{
			"question": "What is the result when we add a number and a string together",
			"a1": "NAN",
			"a2": "9",
			"a3": "0",
			"a4": "1"
		} 
	];
	
	var answers = [4,1,1,2,1];
	
	for(let i = 0; i < data.length; i++) 
	{
		let text = data[i].question + "<br/>";
		let qNode = document.createTextNode(text);
		
		let divNode = document.createElement("div");
		divNode.innerHTML = "q" + (i+1) + ")" + text;
		document.getElementById("assign1").appendChild(divNode);
		
		let qNum = 1;
		
		let node1 = document.createElement("input");
		node1.type = "radio";
		node1.name = "q" + i;
		node1.value = qNum++;
		var inText1 = document.createTextNode(data[i].a1);
		document.getElementById("assign1").appendChild(node1);
		document.getElementById("assign1").appendChild(inText1);
		document.getElementById("assign1").appendChild(document.createElement('br'));
		
		let node2 = document.createElement("input");
		node2.type = "radio";
		node2.name = "q" + i;
		node2.value = qNum++;
		var inText2 = document.createTextNode(data[i].a2);
		document.getElementById("assign1").appendChild(node2);
		document.getElementById("assign1").appendChild(inText2);
		document.getElementById("assign1").appendChild(document.createElement('br'));
		
		let node3 = document.createElement("input");
		node3.type = "radio";
		node3.name = "q" + i;
		node3.value = qNum++;
		var inText3 = document.createTextNode(data[i].a3);
		document.getElementById("assign1").appendChild(node3);
		document.getElementById("assign1").appendChild(inText3);
		document.getElementById("assign1").appendChild(document.createElement('br'));
		
		let node4 = document.createElement("input");
		node4.type = "radio";
		node4.name = "q" + i;
		node4.value = qNum++;
		var inText4 = document.createTextNode(data[i].a4);
		document.getElementById("assign1").appendChild(node4);
		document.getElementById("assign1").appendChild(inText4);
		document.getElementById("assign1").appendChild(document.createElement('br'));
		document.getElementById("assign1").appendChild(document.createElement('br'));
		
		
	}