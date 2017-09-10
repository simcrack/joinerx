/*
*	multiple useful functions
*
*	@author:	simcrack
*	@version:	20170909.0
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
	}
	
	/*
	*	gets value from a form element
	*	
	*	@param:	node	DOM element which the values is searched for
	*	@return:		an array with two values (0: id, 1: value)
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
			default:
				values.push("");
				values.push("");
				break;
		}
		return values;
	}
	
	/*
	*	generates an input field as string
	*
	*	@param:	id			id of the new input field
	*			datatype	datatype of the value (valid expressions are "number", "boolean")
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
			default:
				type_attr = 'type="text"';
		}
		
		//create string
		ret += '<label for="' + id + '">' + description + '</label>';
		ret += '<input id="' + id + '" ' + type_attr + ' ' + val_attr + ' >';
		
		return ret;
	}
}