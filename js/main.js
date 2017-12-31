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
		e[i].onclick = function() { workbench.values.pushElement(this.id); };
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
	matList.arrMatFlaechen	= {}; //datatype for datavar
	matList.arrMatFlaechen.name		= "arrMatFlaechen";
	matList.arrMatFlaechen.values	= [];
	matList.arrMatFlaechen.values.push(["kunhWei",	"Kunstharz weiss"]);
	matList.arrMatFlaechen.values.push(["kunhFarb","Kunstharz farbig"]);
	matList.arrMatFlaechen.values.push(["kunhNCS",	"Kunstharz NCS lackiert"]);
	matList.arrMatFlaechen.values.push(["glas",	"Glas"]);
	
	//Schubladen
	//Mat Schubladen-Doppel
	matList.arrMatSchuDo = {};
	matList.arrMatSchuDo.name	= "arrMatSchuDo";
	matList.arrMatSchuDo.values	= [];
	matList.arrMatSchuDo.values.push(["kunhWei",	"Kunstharz weiss"]);
	matList.arrMatSchuDo.values.push(["kunhFarb",	"Kunstharz farbig"]);
	matList.arrMatSchuDo.values.push(["kunhNCS",	"Kunstharz NCS lackiert"]);
	
	//Schubladenhoehe
	matList.arrSchuHoehe = {};
	matList.arrSchuHoehe.name	= "arrSchuHoehe";
	matList.arrSchuHoehe.values	= [];
	matList.arrSchuHoehe.values.push(["niedrig",	"niedrig"]);
	matList.arrSchuHoehe.values.push(["mittel",	"mittelhoch"]);
	matList.arrSchuHoehe.values.push(["hoch",		"hoch"]);
	
	//Schubladen Griff wenn noetig
	matList.arrGriffSchuDo = {};
	matList.arrGriffSchuDo.name		= "arrGriffSchuDo";
	matList.arrGriffSchuDo.values	= [];
	matList.arrGriffSchuDo.values.push(["ohne",	"ohne"]);
	matList.arrGriffSchuDo.values.push(["grProf",	"Griffprofil"]);
	matList.arrGriffSchuDo.values.push(["griff",	"Griff"]);
	
	
	//Aufhaengesystem Ausfuehrung (Kleiderstange)
	matList.arrAufhAusf = {};
	matList.arrAufhAusf.name	= "arrAufhAusf";
	matList.arrAufhAusf.values	= [];
	matList.arrAufhAusf.values.push(["oval",		"flach-oval"])
	matList.arrAufhAusf.values.push(["licht",		"beleuchtet"])
	matList.arrAufhAusf.values.push(["oVerchr",	"oval verchromt"])
	
	//Tueren
	//Tuersysteme
	matList.arrTuersystem = {};
	matList.arrTuersystem.name		= "arrTuersystem";
	matList.arrTuersystem.values	= [];
	matList.arrTuersystem.values.push(["imperio", "Imperio"]);
	
	//Decken-/Bodenschienen
	matList.arrTuerSchienen = {};
	matList.arrTuerSchienen.name	= "arrTuerSchienen";
	matList.arrTuerSchienen.values	= [];
	matList.arrTuerSchienen.values.push(["aluElox",	"Alu natur eloxiert"]);
	
	//Griffprofil Tueren
	matList.arrTuerGriffprofil = {};
	matList.arrTuerGriffprofil.name		= "arrTuerGriffprofil";
	matList.arrTuerGriffprofil.values	= [];
	matList.arrTuerGriffprofil.values.push(["aluElox", "Alu natur eloxiert"]);
	
	//Wandabschluss
	matList.arrWandabsch = {};
	matList.arrWandabsch.name	= "arrWandabsch";
	matList.arrWandabsch.values	= [];
	matList.arrWandabsch.values.push(["alu",		"Alu"]);
	matList.arrWandabsch.values.push(["kunhWei",	"Kunstharz weiss"]);
	matList.arrWandabsch.values.push(["kunhFarb",	"Kunstharz farbig"]);
	matList.arrWandabsch.values.push(["kunhNCS",	"Kunstharz NCS lackiert"]);
	matList.arrWandabsch.values.push(["apfel",		"Apfel"]);
	matList.arrWandabsch.values.push(["spiegel",	"Spiegel"]);
};