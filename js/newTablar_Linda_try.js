/*
*	class which describes a tablar
*	it represents a tablar line in the tablarlist
*	the tablar itself would no be loaded by the datapicker but by tablare object which paints all tablar objects line by line
*
*	@author:	simcrack
*	@version:	20171231.0
*/

function newTablar(id) {
	this.id			= id;
	this.data		= [];
	var type		= "newTablar";
	
	//initialize data array
	this.data.push(["boFixTab",		"boolean",				false,	"Tablar fix"]);
	this.data.push(["boVerstTab",	"boolean",				false,	"Tablar verstärkt"]);
	this.data.push(["matFlaechen",	matList.arrMatFlaechen,	"",		"Material"]);
	this.data.push(["anzTab",		"length",				1,		"Anzahl solche Tablare"]);
	
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