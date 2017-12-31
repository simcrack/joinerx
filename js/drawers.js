/*
*	class which describes a set of drawers
*	it can hold and display multiple drawer objects
*
*	@author:	simcrack
*	@version:	20171231.0
*/

function Drawers(id) {
	this.id			= id; //id of the Element in which the drawers set is stored
	this.data		= [];
	
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
	}
	
	/*
	*	adds a new drawer to the data array
	*	is usually called into the datapicker
	*
	*	@param	system		"tandembox"		add a tandembox drawer
	*						"sperrholz"		add a sperrholz drawer
	*						"ausziehtablar"	add an ausziehtablar
	*						"schuhauszug"	add a tandembox-drawer
	*			data		an array which shall be stored in the data array of the drawer
	*			
	*/
	this.pushDrawer = function(system, data, id = 0) {
		if(id === 0)  { id = this.getNextDrawerId(); }
		var drawer;
		switch(system) {
			case "tandembox":
				drawer = new Tandembox(id);
				break;
			
		default:
			throwerror("Drawers.pushDrawer", "system", system, "Drawer Type is unkown");
		}
		drawer.setData(data);
		this.data.push([id, drawer]);		
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
			dpDiv.appendChild(this.data[i][1].getFormDiv());
		}
		formHTML += '<input id="submit" type="submit" value="Speichern" onclick="datapicker.submit()">';
		formHTML += '<input id="reset" type="reset" value="Abbrechen" onclick="datapicker.reset()">';
		dpDiv.innerHTML	+= formHTML;
		
		return dpDiv;
	}
	
	/*
	*	get next free drawer id
	*
	*	@return:	number of the new id
	*/
	this.getNextDrawerId = function() {
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