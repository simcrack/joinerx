/*
*	class which describes the elements
*	ir represents the element-divs
*
*	@author:	sicrack
*	@version:	20170909.0
*/

function Element(id) {
	this.id			= id;
	var div			= document.createElement("div");
	var data		= [];

	div.className	= "element";
	div.id 			= "element" + this.id;
	div.onclick		= function() { workbench.elementClicked(id); };

	data.push(["intHoehe",		"integer", 0,		"Höhe"]);
	data.push(["intBreite",		"integer", 0,		"Breite"]);
	data.push(["intTiefe",		"integer", 0,		"Tiefe"]);
	data.push(["boRueckwand",	"boolean", false,	"Rückwand"]);

	/*
	*	change values in the data Array
	*	is called for initializing and changes of the element
	*
	*	@param:	values	values array (["varName", "datatype", "value"])
	*/
	this.setData = function(values) {
		var data_len = data.length;
		var val_len	 = values.length;
		
		for(var i = 0; i < data_len; i++) {
			for(var e = 0; e < val_len; e++) {
				if(data[i][0] == values[e][0] && data[i][1] == values[e][1]) {
					data[i][2] = values[e][2];
					break;
					
				}
			}
		}
	}
	
	/*
	*	creates and returns a DOM node in which a form is placed with which the data of the element can be edited
	*
	*	@return	a DOM node with a HTML form
	*/
	this.getFormDiv = function() {
		var	data_len = data.length;
		var formHTML = "";
		var dpDiv;
		dpDiv		 = document.createElement("div");
		
		//get inputfield
		for(var i = 0; i < data_len; i++) {
			formHTML += framework.generateInputField(data[i][0], data[i][1], data[i][2], data[i][3]);
			formHTML += "<br>";
		}
		formHTML += '<input id="submit" type="submit" value="Speichern" onclick="datapicker.submit()">';
		formHTML += '<input id="reset" type="reset" value="Abbrechen" onclick="datapicker.reset()">';
		dpDiv.innerHTML	= formHTML;
		
		return dpDiv;
	}
	
	this.getId = function() {
		return this.id;
	}

	this.getDiv = function() {
		return div;
	}
}