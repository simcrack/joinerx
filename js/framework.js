/*
*	multiple useful functions
*
*	@author:	simcrack
*	@version:	20170929.0
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
		switch(node.type) {
			case "number":
				values.push("integer");
				values.push(node.value);
				break;
			case "checkbox":
				values.push("boolean");
				values.push(node.checked);
				break;
			case "text":
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
	*			datatype	datatype of the value (valid expressions are "number", "boolean", "string")
	*			data		the initial value/state of the new field
	*			description	description of the field
	*	@return:	a string in which the HTML code for the label and the input field is placed in
	*/
	this.generateInputField = function(id, datatype, data, description) {
		var ret			= "";
		var type_attr	= "";
		var val_attr	= "";
		
		//get value and type attribute
		switch(datatype) {
			case "integer":
				type_attr	= 'type="number"';
				val_attr	= 'value="' + data + '"';
				break;
			case "boolean":
				type_attr	 = 'type="checkbox"';
				if(data) {
					val_attr = 'checked';
				}
				break;
			case "string":
				type_attr	= 'type="text"';
				val_attr	= 'value="' + data + '"';
				break;
			default:
				type_attr = 'type=""';
		}
		
		//create string
		ret += '<label for="' + id + '">' + description + '</label>';
		ret += '<input id="' + id + '" ' + type_attr + ' ' + val_attr + ' >';
		
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