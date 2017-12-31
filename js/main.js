//	load addition js files
document.writeln("<script type='text/javascript' src='js/framework.js'></script>"); //adds class Datapicker
document.writeln("<script type='text/javascript' src='js/element.js'></script>"); //adds class Element
document.writeln("<script type='text/javascript' src='js/elements.js'></script>"); //adds class Elements
document.writeln("<script type='text/javascript' src='js/datapicker.js'></script>"); //adds class Datapicker

this.reader	= new FileReader(); //is used by loadfile()
	
function init() {
	var e		= document.getElementsByClassName("element_add");
	var elen	= e.length;
	this.loadMatList(); //initialize some global arrays

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
	reader.readAsText(file,	"UTF-8");
}

/*
*	saves the Project as a JSON file
*/
function saveFile() {
	workbench.saveProject();
}


/*
*	is replaced by an external call soon...
*/
function loadMatList() {
	matList					= {}; //for dropdown menus for materials and systems (global variable)
	
	//["id",	"Bezeichnung"]
	//Mat Innenschrank
	matList.arrMatFlaechen	= []; //datatype for datavar
	matList.arrMatFlaechen.push(["kunhWei",	"Kunstharz weiss"]);
	matList.arrMatFlaechen.push(["kunhFarb","Kunstharz farbig"]);
	matList.arrMatFlaechen.push(["kunhNCS",	"Kunstharz NCS lackiert"]);
	matList.arrMatFlaechen.push(["glas",	"Glas"]);
	
	//Schubladen
	//Mat Schubladen-Doppel
	matList.arrMatSchuDo = [];
	matList.arrMatSchuDo.push(["kunhWei",	"Kunstharz weiss"]);
	matList.arrMatSchuDo.push(["kunhFarb",	"Kunstharz farbig"]);
	matList.arrMatSchuDo.push(["kunhNCS",	"Kunstharz NCS lackiert"]);
	
	//Schubladenhoehe
	matList.arrSchuHoehe = [];
	matList.arrSchuHoehe.push(["niedrig",	"niedrig"]);
	matList.arrSchuHoehe.push(["mittel",	"mittelhoch"]);
	matList.arrSchuHoehe.push(["hoch",		"hoch"]);
	
	//Schubladen Griff wenn noetig
	matList.arrGriffSchuDo = [];
	matList.arrGriffSchuDo.push(["ohne",	"ohne"]);
	matList.arrGriffSchuDo.push(["grProf",	"Griffprofil"]);
	matList.arrGriffSchuDo.push(["griff",	"Griff"]);
	
	
	//Aufhaengesystem Ausfuehrung (Kleiderstange)
	matList.arrAufhAusf = [];
	matList.arrAufhAusf.push(["oval",		"flach-oval"])
	matList.arrAufhAusf.push(["licht",		"beleuchtet"])
	matList.arrAufhAusf.push(["oVerchr",	"oval verchromt"])
	
	//Tueren
	//Tuersysteme
	matList.arrTuersystem = [];
	matList.arrTuersystem.push(["imperio",	"Imperio"]);
	
	//Decken-/Bodenschienen
	matList.arrTuerSchienen=[];
	matList.arrTuerSchienen.push(["aluElox","Alu natur eloxiert"]);
	
	//Griffprofil Tueren
	matList.arrTuerGriffprofil = [];
	matList.arrTuerGriffprofil.push(["aluElox",	"Alu natur eloxiert"]);
	
	//Wandabschluss
	matList.arrWandabsch = [];
	matList.arrWandabsch.push(["alu",		"Alu"]);
	matList.arrWandabsch.push(["kunhWei",	"Kunstharz weiss"]);
	matList.arrWandabsch.push(["kunhFarb",	"Kunstharz farbig"]);
	matList.arrWandabsch.push(["kunhNCS",	"Kunstharz NCS lackiert"]);
	matList.arrWandabsch.push(["apfel",		"Apfel"]);
	matList.arrWandabsch.push(["spiegel",	"Spiegel"]);
};