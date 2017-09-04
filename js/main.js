function init() {
	var e = document.getElementsByClassName("element_add");
	for(var i = 0; i < e.length; i++) {
		e[i].onclick = function() { addElement(this.id); };
	}
}

/*
*	add an element to the existing array
*	
*	@param position	specifies if the at which position the element shall be added
*					allowed values are the div.ids "element_left" and "element_right"
*/
function addElement(position) {
	var wbDiv	= document.getElementById("workbench");
	var newDiv	= document.createElement("div");
	newDiv.className	= "element";
	newDiv.id 			= getNextElementId();
	
	switch(position) {
		case 'element_left':
			wbDiv.insertBefore(newDiv, wbDiv.childNodes[2])
			break;
		case 'element_right':
			wbDiv.insertBefore(newDiv, document.getElementById('element_right'));
			break;
		default:
			break;
	}
}


/*	
*	function which retrieves next higher, free id in the element-array
*	
*	@return	string	next higher id (smth lile "element5")
*/
function getNextElementId() {
	//--//not coded yet
	return "element5";
}