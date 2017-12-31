/*
*	class which describes a drawer
*	it represents a drawer-line in the drawerist
*
*	@author:	simcrack
*	@version:	20171231.0
*/

function Drawer(id) {
	
function Element(id) {
	this.id			= id;
	this.data		= [];
	var div			= document.createElement("div");


	div.className	= "drawer";
	div.id 			= "drawer" + this.id;
	div.innerHTML	= "<p class="element_info">&nbsp;</p>"; //inneHTML muss einen Inhalt haben, sonst wird die Position des DIVs unlogisch geändert
	
	//initialize data array
	this.data.push(["intHoehe",		"integer", 0,		"Höhe"]);
	this.data.push(["intBreite",	"integer", 0,		"Breite"]);
	this.data.push(["intTiefe",		"integer", 0,		"Tiefe"]);
	this.data.push(["boFix",		"boolean", false,	"Fix"]);
	this.data.push(["boVerstaerkt",	"boolean", false,	"Verstärkt"]);
	this.data.push(["boOSB",		"boolean", false,	"OSB"]);
	
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