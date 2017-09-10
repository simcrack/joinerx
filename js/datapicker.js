/*
*	class of the datapicker-div
*	draws an stores 
*
*	@oaram:		HTML id of the element
*	@author:	simcrack
*	@version:	20170908.0
*/
function Datapicker(id){
	this.id	= id;
	
	var dpDiv = document.getElementById(this.id);
	var curElement;
	/*
	*	loads a form for example the form of an element
	*
	*	@param:	DOM-element which shall be loaded
	*/
	this.retrieve = function(element) {
		curElement = element;
		dpDiv.innerHTML = ""; //delete all from datapicker
		dpDiv.appendChild(curElement.getFormDiv());
		dpDiv.style.visibility = "visible";
	}
	
	/*
	*	saves the data into the element
	*/
	this.submit = function() {
		var nodes	= dpDiv.querySelectorAll("input");
		var len		= nodes.length;
		var result	= [];
		
		for(var i = 0; i < len; i++) {
			result.push(framework.getFormValue(nodes[i]));
		}
		curElement.setData(result);
		
		//reset the datapicker
		this.reset();
	}
	
	/*
	*	resets the datapicker
	*/
	this.reset = function() {
		currElement = {};
		dpDiv.innerHTML = "";
		dpDiv.style.visibility = "hidden";
	}
}