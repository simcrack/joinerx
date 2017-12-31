/*
*	multiple useful functions
*
*	@author:	simcrack
*	@version:	20171231.0
*/
function Framework() {
	
	/*
	*	converts an boolean Value into a string
	*	is used in forms
	*
	*	@param:	boValue	boolean value which shall be converted
	*	@return	string, if boValue==true "true" else "false"
	*/
	this.getBoolAsString = function(boValue) {
		if(boValue) {
			return "true";
		} else {
			return "false";
		}
	};
	
	/*
	*	gets value from a form element
	*	
	*	@param:	node	DOM element in which the value is searched for
	*	@return:		an array with three values (0: id, 1: datatype, 2: value)
	*/
	this.getFormValue = function(node) {
		var values = [];
		
		values.push(node.id);
		switch(node.className) {
			case "dtypeInteger":
				values.push("integer");
				values.push(node.value);
			case "dtypeDecimal":
				values.push("decimal");
				values.push(node.value);
				break;
			case "dtypeBoolean":
				values.push("boolean");
				values.push(node.checked);
				break;
			case "dtypeString":
				values.push("string");
				values.push(node.value);
				break;
			default:
				values.push("");
				values.push("");
				break;
		}
		return values;
	};
	
	/*
	*	generates an input field as string
	*
	*	@param:	id			id of the new input field
	*			datatype	datatype of the value (valid expressions are "integer", "decimal", "boolean", "string")
	*			data		the initial value/state of the new field
	*			description	description of the field
	*	@return:	a string in which the HTML code for the label and the input field is placed in
	*/
	this.generateInputField = function(id, datatype, data, description) {
		var len;
		var ret			= "";
		var class_attr	= "";
		var type_attr	= "";
		var val_attr	= "";
		var boComplex	= false;
		
		//get value and type attribute
		switch(datatype) {
			case matList.arrMatFlaechen, matList.arrMatSchuDo,arrSchuHoehe,arrGriffSchuDo,arrAufhAusf,arrTuersystem,arrTuerSchienen,arrTuerGriffprofil,arrWandabsch:
				ret += '<label for="' + id + '">' + description + '</label>';
				ret += '<select id="' + id + '"class="' + datatype.name + '">';
				len = datatype.values.length;
				for (var i = 0; i < len; i++){
					if (datatype.values[i][0] === data) {
						val_attr = " selected";
					} else {
						val_attr = "";
					}
					ret += '<option value="' + datatype.values[i][0] + '" ' + val_attr + '>' + datatype.values[i][1] + '</option>';
				}
				ret += '</select>';
				boComplex = true;
				break;
			case "integer":
				type_attr	= 'type="number"';
				val_attr	= 'value="' + data + '"';
				class_attr	= 'class = "dtypeInteger"';
				break;
			case "decimal":
				type_attr	= 'type="number"';
				val_attr	= 'value="' + data + '"';
				class_attr	= 'class = "integer"';
				class_attr	= 'class = "dtypeDecimal"';
				break;
			case "boolean":
				type_attr	 = 'type="checkbox"';
				if(data) {
					val_attr = 'checked';
				}
				class_attr	= 'class = "dtypeBoolean"';
				break;
			case "string":
				type_attr	= 'type="text"';
				val_attr	= 'value="' + data + '"';
				class_attr	= 'class = "dtypeString"';
				break;
			
			default:
				type_attr = 'type=""';
		}
		
		//create string
		if (boComplex === false) {
			ret += '<label for="' + id + '">' + description + '</label>';
			ret += '<input id="' + id + '" ' + class_attr + ' ' + type_attr + ' ' + val_attr + '>';
		}
		
		return ret;
	};
	
	/*
	*	gets an array element in an 2 dimensional array for a specific id
	*	the function loops through the first dimension of the array and search the value for the specified id
	*	
	*	@param:	array	an 2 dimensional array
	*			id		string of the fieldname for wich the value is searchd for
	*			id_i	number of the array element in the 2nd dimension in which the function shall search fpr the id
	*			val_i	number of the array element in the 2nd dimension in which the function shall get the value
	*	@return	any		the value which is in the array[i][val_i]
	*			null	if the id wasnt found
	*/
	this.getValueFromArray = function(array, id, id_i, val_i) {
		var ret		= null;
		var arr_len	= array.length;
		
		for(var i = 0; i < arr_len; i++){
			if(array[i][id_i] == id) {
				ret = array[i][val_i];
				break;
			}
		}
		
		return ret;
	}
	
}