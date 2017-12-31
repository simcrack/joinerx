//	load addition js files
document.writeln("<script type='text/javascript' src='js/framework.js'></script>"); //adds class Datapicker
document.writeln("<script type='text/javascript' src='js/element.js'></script>"); //adds class Element
document.writeln("<script type='text/javascript' src='js/elements.js'></script>"); //adds class Elements
document.writeln("<script type='text/javascript' src='js/datapicker.js'></script>"); //adds class Datapicker

this.reader	= new FileReader(); //is used by loadfile()

function init() {
	var e		= document.getElementsByClassName("element_add");
	var elen	= e.length;
	for(var i = 0; i < elen; i++) {
		e[i].onclick = function() { workbench.pushElement(this.id); };
	}
	framework	= new Framework();
	workbench	= new Elements("workbench");
	datapicker	= new Datapicker("datapicker");
	
	//add event listener on the edit div for the workbench
	document.getElementById("edit_elements").addEventListener("click", workbench.editClicked);
	
	//add an event listener on the reader object which is fired when a project file have been loaded
	reader.addEventListener("load", function(event) {
		workbench.loadProject(reader.result)
	});

}

/*
*	loads an file into the reader object
*/
function loadFile() {
	var file	= document.getElementById("loadfile").files[0];
	reader.readAsText(file, "UTF-8");
}

/*
*	saves the Project as a JSON file
*/
function saveFile(){
	workbench.saveProject();
}