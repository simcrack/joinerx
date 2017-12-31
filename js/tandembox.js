/*
*	class which describes a drawer
*	it represents a drawer line in the drawerlist
*	the drawer itself would no be loaded by the datapicker but by drawers object which paints all drawer objects line by line
*
*	@author:	simcrack
*	@version:	20171231.0
*/

function Tandembox(id) {
	this.id			= id;
	this.data		= [];
	var type		= "tandembox";
	
	//initialize data array
	this.data.push(["schuHoehe",	matList.arrSchuHoehe,	"",		"Höhe"]);
	this.data.push(["boBoxside",	"boolean",				false,	"Boxside"]);
	this.data.push(["boDoppel",		"boolean",				false,	"Doppel"]);
	this.data.push(["matSchuDo",	matList.arrMatSchuDo,	"",		"Farbe/Material"]);
	this.data.push(["griffSchuDo",	matList.arrGriffSchuDo,	"",		"Griffprofil"]);
	this.data.push(["griffPreis",	"decimal",				0.0,	"Preis (Griff)"]);
	
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
	}
	
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
		dpDiv.innerHTML	= formHTML;
		
		return dpDiv;
	}
	
	/*
	*	set the data from a JSON object in this object
	*	
	*	@param:		JSON object with data compatibel to the getJSON function
	*/
	this.setDataFromJSON = function(data) {
		this.data	= data;
	}
	
	
	this.getId = function() {
		return this.id;
	}
	
	this.getType = function() {
		return type;
	}
	
}