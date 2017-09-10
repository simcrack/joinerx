//	load addition js files
document.writeln("<script type='text/javascript' src='js/framework.js'></script>"); //adds class Datapicker
document.writeln("<script type='text/javascript' src='js/element.js'></script>"); //adds class Element
document.writeln("<script type='text/javascript' src='js/elements.js'></script>"); //adds class Elements
document.writeln("<script type='text/javascript' src='js/datapicker.js'></script>"); //adds class Datapicker

function init() {
	var e		= document.getElementsByClassName("element_add");
	var elen	= e.length;
	for(var i = 0; i < elen; i++) {
		e[i].onclick = function() { workbench.pushElement(this.id); };
	}
	framework	= new Framework();
	workbench	= new Elements("workbench");
	datapicker	= new Datapicker("datapicker");
	
}