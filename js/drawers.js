/*
*	class which describes a set of drawers
*	it can hold and display multiple drawer objects
*
*	@author:	simcrack
*	@version:	20171231.0
*/

function Drawers(id) {
	this.id			= id;
	this.data		= [];
	var div			= document.createElement("div");

	div.className	= "drawers";
	div.id 			= "drawers" + this.id;
	
	//by default there is no data in the drawers object
	
	/*
	*	change values in the data Array
	*	is called for initializing and changes of the element
	*
	*	@param:	values	values array (["varName", "datatype", "value"])
	*/
	this.setData = function(values) {
		var data_len = this.data.length;
		var val_len	 = values.length;
		
		for(var i = 0; i < data_len; i++) {
			for(var e = 0; e < val_len; e++) {
				if(this.data[i][0] === values[e][0] && this.data[i][1] === values[e][1]) {
					this.data[i][2] = values[e][2];
					break;
					
				}
			}
		}
	};
	
	/*
	*	adds a new drawer to the data array
	*	is usually called into the datapicker
	*
	*	@param	system		"tandembox"		add a tandembox drawer
	*						"sperrholz"		add a sperrholz drawer
	*						"ausziehtablar"	add an ausziehtablar
	*						"schuhauszug"	add a tandembox-drawer
	*			data		an array which shall be stored in the data array of the drawer
	*			position	"drawer_down"	append the new drawer at the end
	*						"drawer_up"		inser the new drawer before the ferst
	*			
	*/
	this.pushDrawer = function(data, position = "drawer_down", id = 0) {
		this.data.push([""]);
	};
	
	/*
	*	creates and returns a DOM node in which a form is placed with which the data of the drawer can be edited
	*
	*	@return	a DOM node with a HTML form
	*/
	this.getFormDiv = function() {
		var	data_len = this.data.length;
		var formHTML = "";
		var dpDiv;
		dpDiv		 = document.createElement("div");
		
		//get inputfield
		for(var i = 0; i < data_len; i++) {
			formHTML += framework.generateInputField(this.data[i][0], this.data[i][1], this.data[i][2], this.data[i][3]);
		}
		formHTML += '<input id="submit" type="submit" value="Speichern" onclick="datapicker.submit()">';
		formHTML += '<input id="reset" type="reset" value="Abbrechen" onclick="datapicker.reset()">';
		dpDiv.innerHTML	= formHTML;
		
		return dpDiv;
	};
	
	this.getId = function() {
		return this.id;
	};
	
	this.getDiv = function() {
		return div;
	};
	
	this.setInnerHTML = function(html) {
		div.innerHTML = '<p class="drawer_info">' + html + '</p>';
	};
	
	/*
	*	set the data from a JSON object in this object
	*	
	*	@param:		JSON object with data compatibel to the getJSON function
	*/
	this.setDataFromJSON = function(data) {
		this.data	= data;
	};
}