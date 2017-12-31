/*
*	class of the datapicker-div
*	draws an stores 
*
*	@oaram:		HTML id of the element
*	@author:	simcrack, chleeblatt
*	@version:	20171231.0
*/
function Datapicker(id){
	this.id	= id;
	
	var dpDiv = document.getElementById(this.id);
	var curObject;
	
	/*
	*	loads a form for example the form of an element
	*
	*	@param:	object which shall be loaded
	*/
	this.retrieve = function(object) {
		curObject = object;
		dpDiv.innerHTML = ""; //delete all from datapicker
		dpDiv.appendChild(curObject.getFormDiv());
		dpDiv.style.visibility = "visible";
	};
	
	/*
	*	saves the data into the curObject
	*/
	this.submit = function() {
		var nodes	= dpDiv.querySelectorAll("input");
		var len		= nodes.length;
		var result	= [];
		
		for(var i = 0; i < len; i++) {
			result.push(framework.getFormValue(nodes[i]));
		}
		curObject.setData(result);
		
		//reset the datapicker
		this.reset();
	};
	
	/*
	*	resets the datapicker
	*/
	this.reset = function() {
		currElement = {};
		dpDiv.innerHTML = "";
		dpDiv.style.visibility = "hidden";
	}
}