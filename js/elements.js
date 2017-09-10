/*
*	class in which the Elements are placed
*	it represents the workbench-div
*
*	@param:
*	@author:	sicrack
*	@version:	20170908.1
*/
function Elements(id) {
	this.id			= id;
	var elements	= [];	//safes the id-numbers of the elements the order of the array ist also the order of the elements
	var wbDiv		= document.getElementById(this.id); //the DOM-object of the workbench-div
	
	var boSockel	= false;
		
	/*
	*	adds an ne element to the workbench at the defined position
	*	
	*	@param: position	'left'	add the new element at the left
	*						'right'	add the new element at the right
	*	@return:	id-number of the new element
	*/
	this.pushElement = function(position) {
		var element			= new Element(this.getNextElementId());
		var newDiv			= element.getDiv();
		
		//Insert and draw the new element
		switch(position) {
			case 'element_left':
				elements.unshift(element);
				wbDiv.insertBefore(newDiv, wbDiv.childNodes[2]);
				break;
			case 'element_right':
				elements.push(element);
				wbDiv.insertBefore(newDiv, document.getElementById('element_right'));				
				break;
			deafult:
				break;
		}
	}
	
	
	/*
	*	get next free element id
	*
	*	@return:	the new id
	*/
	this.getNextElementId = function() {
		var eid		= 0;
		var elemlen	= elements.length;

		//find the highest element id
		for(var i = 0; i < elemlen; i++) {
			if(eid < elements[i].getId()) {
				eid = elements[i].getId();
			}
		}
		return eid + 1;
	}
	
	/*
	*	event when user clicks on an element loads the datapicker
	*
	*	@param:	id	the id of the new element
	*/
	this.elementClicked = function(id) {
		datapicker.retrieve(elements[this.getElementIndexById(id)]); //datapicker.retrieve(id);
	}

	/*
	*	search an element in the elements-array by the id
	*	returs the array index of the element
	*
	*	@param:	id	id of the element which is searched
	*	@return:	array index of the element
	*				-1 if the element wasnt found
	*/
	this.getElementIndexById = function(id) {
		var eid		= -1;
		var elemlen	= elements.length;
		
		//find the element
		for(var i = 0; i < elemlen; i++) {
			if (elements[i].getId() == id) {
				eid = i;
				break;
			}
		}
		return eid;
	}
	
	this.getId			= function() {
		return this.id;
	}
	
	this.getDiv			= function() {
		return this.wbDiv;
	}
	
	this.getSockel		= function() {
		return boSockel;
	}
	
	this.setSockel		= function(newvalue) {
		boSockel = newvalue;
	}
}