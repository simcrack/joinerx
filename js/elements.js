/*
*	class in which the Elements are placed
*	it represents the workbench-div
*
*	@param:
*	@author:	simcrack, chleeblatt
*	@version:	20171231.0
*/
function Elements(id) {
	this.id			= id;
	this.data		= [];
	this.elements	= [];	//safes the id-numbers of the elements the order of the array ist also the order of the elements
	var me			= this; //in this retarded program language this isnt always a reference of this object
	var wbDiv		= document.getElementById(this.id); //the DOM-object of the workbench-div
	
	
	//initialize this.data array
	//um darauf zuzugreifen: workbench.data[0][1] gibt "string"... macht man aber nicht.!!!! bööööööse!!!!
	this.data.push(["strNummer",	"string",				"",		"Auftragsnummer"]);
	this.data.push(["intHoehe",		"integer",				0,		"Gesamt-Höhe"]);
	this.data.push(["intBreite",	"integer",				0,		"Gesamt-Breite"]);
	this.data.push(["intTiefe",		"integer",				0,		"Tiefe"]);
	this.data.push(["boRueckwand",	"boolean",				false,	"Rückwand"]);
	this.data.push(["boSockel",		"boolean",				true,	"Sockel"]);
	this.data.push(["matFlaechen",	matList.arrMatFlaechen,	"",		"Material Innenschrank"]);
		
	/*
	*	adds an ne element to the workbench at the defined position
	*	
	*	@param: position	'left'	add the new element at the left
	*						'right'	add the new element at the right
	*			id			id of the element, if ommitted the next free id is searched and used
	*	@return:	id-number of the new element
	*/
	this.pushElement = function(position, id = 0) {
		if(id === 0)  { id = this.getNextElementId(); }
		var element			= new Element(id);
		var newDiv			= element.getDiv();
		
		//Insert and draw the new element
		switch(position) {
			case 'element_left':
				this.elements.unshift(element);
				wbDiv.insertBefore(newDiv, wbDiv.childNodes[5]);
				break;
			case 'element_right':
				this.elements.push(element);
				wbDiv.insertBefore(newDiv, document.getElementById('element_right'));				
				break;
			break;
		}
		
		//Update Position Text ("e.g. Element 1") in the Eelement DIV
		this.updateElementHTML();
	};
	
	
	/*
	*	get next free element id
	*
	*	@return:	number of the new id
	*/
	this.getNextElementId = function() {
		var eid		= 0;
		var elemlen	= this.elements.length;

		//find the highest element id
		for(var i = 0; i < elemlen; i++) {
			if(eid < this.elements[i].getId()) {
				eid = this.elements[i].getId();
			}
		}
		return eid + 1;
	};
	
	/*
	*	event when user clicks on an element loads the datapicker
	*
	*	@param:	id	the id of the new element
	*/
	this.elementClicked = function(id) {
		datapicker.retrieve(this.elements[this.getElementIndexById(id)]); //datapicker.retrieve(id);
	};

	/*
	*	search an element in the elements-array by the id
	*	returs the array index of the element
	*
	*	@param:	id	id of the element which is searched
	*	@return:	array index of the element
	*				-1 if the element wasnt found
	*/
	this.getElementIndexById = function(id) {
		var eid		= -1;
		var elemlen	= this.elements.length;
		
		//find the element
		for(var i = 0; i < elemlen; i++) {
			if (this.elements[i].getId() === id) {
				eid = i;
				break;
			}
		}
		return eid;
	};
	
	/*
	*	is called when the dataüicker shall be displayed for the workbench
	*/
	this.editClicked = function(){
		datapicker.retrieve(me); //datapicker.retrieve(id);
		var i = JSON.stringify(me);

	};
	
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
	};
	
	/*
	*	informs all Elements of their real position
	*	this is important becuase the element shall display a titel like "ELement 1"
	*	this function is called everytime when a element is added or deleted
	*/
	this.updateElementHTML = function() {
		var elements_len = this.elements.length;
		for(var i = 0; i < elements_len; i++){
			this.elements[i].setInnerHTML("Element " + (i + 1))
		}
	};

	/*
	*	deletes all elements from the workbench
	*/
	this.reset = function() {
		this.data		= [];
        this.elements	= [];
        var elements	= wbDiv.getElementsByClassName("element");
        var len			= elements.length;
        for(var i = 0; i < len; i++) {
            elements[i].parentNode.removeChild(elements[i]);
		}
	};

	/*
	*	gets an JSON string of the object which is used to save&load the object
	*	only variables with "this." are translated into the string
	*	the string ist saved in a JSON file which the user can download
	*/
	this.saveProject = function() {
		var filename = framework.getValueFromArray(this.data, "strName", 0, 2);
		if(filename-length <= 0) { filename = "Unbenanntes Projekt"; }
		var file = new File([JSON.stringify(this)], filename + ".json", {type: 'plain/text'});
		var url = URL.createObjectURL(file);
		window.open(url);
	};
	
	/*
	*	set the data from a JSON string in this object 
	*	the JSON string must be compatible with the string from the getJSON function
	*	
	*	@param:		JSON string with data compatible to the getJSON function
	*/
	this.loadProject = function(jsonstring) {
        this.reset(); //delete all divs from the worbench

        jsonobj = JSON.parse(jsonstring);
		this.id		= jsonobj["id"];
		this.data	= jsonobj["data"];
		
		var elements = jsonobj["elements"];
		var elem_len = elements.length;
        for(var i = 0; i < elem_len; i++) {
            var element = elements[i];
            this.pushElement("element_right", element["id"]);
            var elem_id = this.getElementIndexById(element["id"]);
            this.elements[i].setDataFromJSON(element["data"]);
        }
	};
	
}