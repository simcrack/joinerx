/*
*	class which describes a set of tablare
*	it can hold and display multiple tablar objects
*
*	@author:	chleeblatt
*	@version:	20180101.0
*/

function Tablare(id) {
	this.id			= id; //id of the Element in which the tablar set is stored
	this.data		= [];
		
	//by default there is no data in the tablare object
		
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
	*	adds a new tablar to the data array
	*	is usually called into the datapicker
	*
	*	@param	system		"newTablar			add a Tablar (rest might be useless?)
	*						"fixVerstaerkt"		add a fixVerstaerkt tablare
	*						"fixNormal"			add a fixNormal tablare
	*						"fixOSB"			add a fixOSB tablare
	*						"verstVerstaerkt"	add a verstVerstaerkt tablare
	*						"verstNormal"		add a verstNormal tablare
	*						"verstOSB"			add a verstOSB tablare
	*			data		an array which shall be stored in the data array of the tablare
	*			
	*/
	this.pushTablar = function(system, data, id = 0) {
		if(id === 0)  { id = this.getNextTablarId(); }
		var tablar;
		switch(system) {
			case "newTablar":
				tablar = new newTablar(id);
				break;
			
		default:
			throwerror("Tablare.pushTablar", "system", system, "Tablar Type is unkown");
		}
		tablar.setData(data);
		this.data.push([id, tablar]);		
	}
	
	/*
	*	creates and returns a DOM node in which a form is placed with which the data of the tablar can be edited
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
			dpDiv.appendChild(this.data[i][1].getFormDiv());
		}
		formHTML += '<input id="submit" type="submit" value="Speichern" onclick="datapicker.submit()">';
		formHTML += '<input id="reset" type="reset" value="Abbrechen" onclick="datapicker.reset()">';
		dpDiv.innerHTML	+= formHTML;
		
		return dpDiv;
	}
	
	/*
	*	get next free tablar id
	*
	*	@return:	number of the new id
	*/
	this.getNextTablarId = function() {
		var did		= 0;
		var datalen	= this.data.length;

		//find the highest element id
		for(var i = 0; i < datalen; i++) {
			if(did < this.data[i].getId()) {
				did = this.data[i].getId();
			}
		}
		return did + 1;
	}
	
	this.getId = function() {
		return this.id;
	}
	
	/*
	*	set the data from a JSON object in this object
	*	
	*	@param:		JSON object with data compatibel to the getJSON function
	*/
	this.setDataFromJSON = function(data) {
		this.data	= data;
	}
}