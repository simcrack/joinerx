/*
*	class which describes the elements
*	ir represents the element-divs
*
*	@author:	simcrack
*	@version:	20170930.0
*/

function Element(id) {
	this.id			= id;
	this.data		= [];
	this.drawers	= new Drawers(id);
	var me			= this;
	var div			= document.createElement("div");
	this.drawers.pushDrawer("tandembox", [["schuHoehe",	matList.arrSchuHoehe,	""],["boBoxside",	"boolean",				false],["boDoppel",		"boolean",				false],["matSchuDo",	matList.arrMatSchuDo,	""],["griffSchuDo",	matList.arrGriffSchuDo,	""],["griffPreis",	"decimal",				0.0]]);
	

	div.className	= "element";
	div.id 			= "element" + this.id;
	div.innerHTML	= '<p class="element_info">&nbsp;</p>'; //inneHTML muss einen Inhalt haben, sonst wird die Position des DIVs unlogisch geändert
	
	//initialize data array
	this.data.push(["intHoehe",		"integer", 0,		"Höhe"]);
	this.data.push(["intBreite",	"integer", 0,		"Breite"]);
	this.data.push(["intTiefe",		"integer", 0,		"Tiefe"]);
	this.data.push(["boRueckwand",	"boolean", false,	"Rückwand"]);
	
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
	*	creates and returns a DOM node in which a form is placed with which the data of the element can be edited
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
			formHTML += "<br>";
		}
		formHTML += '<input id="submit" type="submit" value="Speichern" onclick="datapicker.submit()">';
		formHTML += '<input id="reset" type="reset" value="Abbrechen" onclick="datapicker.reset()">';
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
	
	/*
	*	is called by the "Schubladen" button
	*	retrieves the datapicker
	*/
	this.editDrawers = function() {
		datapicker.retrieve(this.drawers);
	}
	
	this.getId = function() {
		return this.id;
	}
	
	this.getDiv = function() {
		return div;
	}
	
	this.setInnerHTML = function(html) {
		div.innerHTML = '';		
		div.innerHTML += '<p class="element_info">' + html + '</p>';
		div.innerHTML += '<input type="button" id="element_edit_button' + id + '" class="element_edit_button" value="Element bearbeiten">';
		div.innerHTML += '<input type="button" id="drawers_edit_button' + id + '" class="drawers_edit_button" value="Schubladen bearbeiten">';
		div.getElementsByClassName("element_edit_button")[0].onclick = function() { workbench.elementClicked(id); }
		div.getElementsByClassName("drawers_edit_button")[0].onclick = function() { me.editDrawers(); }
	}
}