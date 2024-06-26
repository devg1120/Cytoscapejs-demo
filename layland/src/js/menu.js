import $ from 'jquery';
import 'bootstrap';
import {cy} from './cy-utilities';
import { saveAs } from 'file-saver';
import {layoutProperties} from './layoutProperties';

$("body").on("change", "#inputFile", function(e, fileObject) {
  var inputFile = this.files[0] || fileObject;

  if (inputFile) {
    var fileExtension = inputFile.name.split('.').pop();
    var r = new FileReader();
    r.onload = function(e) {
      cy.remove(cy.elements());
      var content = e.target.result;
      if(fileExtension == "graphml" || fileExtension == "xml"){
        cy.graphml({layoutBy: 'null'});
        cy.graphml(content);
      }
      else if(fileExtension == "json"){
        cy.json({elements: JSON.parse(content)});
      }
      else{
        var tsv = cy.tsv();
        tsv.importTo(content);        
      }
    };
    r.addEventListener('loadend', function(){
      if(!fileObject)
        document.getElementById("fileName").innerHTML = inputFile.name;
      
      if(inputFile.name == "samples/sample1.graphml"){
        cy.nodes().forEach(function(node, i){
          let width = [30, 70, 110];
          let size = width[i%3];
          node.css("width", size);
          node.css("height", size);
        });
      }
      layoutProperties.setFcoseProperty("fixedNodeConstraint", undefined);
      layoutProperties.setFcoseProperty("alignmentConstraint", undefined);
      layoutProperties.setFcoseProperty("relativePlacementConstraint", undefined);
      document.getElementById("fcoseConstraintFile").value = "";
      
      $("#runLayout").trigger("click");
    });
    r.readAsText(inputFile);
  } else { 
    alert("Failed to load file");
  }
  $("#inputFile").val(null);
});

$("body").on("change", "#fcoseConstraintFile", function(e, fileObject) {
  var inputFile = this.files[0] || fileObject;
  if (inputFile) {
    var r = new FileReader();
    r.onload = function(e) {
      var content = JSON.parse(e.target.result);
      layoutProperties.setFcoseProperty("fixedNodeConstraint", undefined);
      layoutProperties.setFcoseProperty("alignmentConstraint", undefined);
      layoutProperties.setFcoseProperty("relativePlacementConstraint", undefined);
      if(content.fixedNodeConstraint) {
        layoutProperties.setFcoseProperty("fixedNodeConstraint", content.fixedNodeConstraint);
      }
      if(content.alignmentConstraint) {
        layoutProperties.setFcoseProperty("alignmentConstraint", content.alignmentConstraint);
      }      
      if(content.relativePlacementConstraint) {
        layoutProperties.setFcoseProperty("relativePlacementConstraint", content.relativePlacementConstraint);
      }      
    };
    r.addEventListener('loadend', function(){
      document.getElementById("fcoseConstraintFile").value = "";
      if(!fileObject)
        document.getElementById("fcoseConstraintFileName").innerHTML = inputFile.name;
    });
    r.readAsText(inputFile);
  } else { 
    alert("Failed to load file");
  }
  $("#inputFile").val(null);
});

document.getElementById("openFile").addEventListener("click", function(){
  document.getElementById("inputFile").click();
});

document.getElementById("openFcoseConstraintFile").addEventListener("click", function(){
  document.getElementById("fcoseConstraintFile").click();
});

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

document.getElementById("saveFileGraphml").addEventListener("click", function(){
  let graphString = cy.graphml();
  download('graph.graphml', graphString);
});

document.getElementById("saveFileJson").addEventListener("click", function(){
  let graphString = cy.json().elements;
  download('graph.json', JSON.stringify(graphString));
});

document.getElementById("saveJPG").addEventListener("click", function(){
  let jpgContent = cy.jpg({output: "blob", scale: 2, full: true});
  saveAs(jpgContent, "graph.jpg");
});

function evaluate(layoutTime){
  let evaluate = document.getElementById("evaluate").checked;
  let graphProperties;
  if(evaluate)
    graphProperties = cy.layvo("get").generalProperties();
	document.getElementById("numOfNodes").innerHTML = cy.nodes().length;
	document.getElementById("numOfEdges").innerHTML = cy.edges().length;
  document.getElementById("layoutTime").innerHTML = evaluate ? Math.round(layoutTime * 10 ) / 10 + " ms" : "-"; 
  document.getElementById("numberOfEdgeCrosses").innerHTML = evaluate ? graphProperties.numberOfEdgeCrosses : "-";
  document.getElementById("numberOfNodeOverlaps").innerHTML = evaluate ? graphProperties.numberOfNodeOverlaps : "-";
  document.getElementById("averageEdgeLength").innerHTML = evaluate ? Math.round(graphProperties.averageEdgeLength * 10 ) / 10 : "-";
  document.getElementById("totalArea").innerHTML = evaluate ? Math.round(graphProperties.totalArea * 10 ) / 10 : "-";
}

$("body").on("click", "#runLayout", function(){
  let layoutType = document.getElementById("layout");
  let startTime;
  let endTime;
  
  if(layoutType.options[layoutType.selectedIndex].text == "fCoSE") {
//    let relativePlacementConstraints = [];
//    cy.edges().forEach(function(edge){
//      relativePlacementConstraints.push({top: edge.source().id(), bottom: edge.target().id(), gap: 100});
//    });
//    layoutProperties.setFcoseProperty('relativePlacementConstraint', relativePlacementConstraints);
//    let constraints = {relativePlacementConstraint: relativePlacementConstraints};
//    console.log(JSON.stringify(constraints, null, 2));   
    startTime = performance.now();
    let options = layoutProperties.getFcoseProperties();
    cy.layout(options).run();
    endTime = performance.now();
    evaluate(endTime - startTime);
  }
  else if(layoutType.options[layoutType.selectedIndex].text == "CoSE"){
    startTime = performance.now();
    cy.layout(layoutProperties.getCoseProperties()).run();
    endTime = performance.now();
    evaluate(endTime - startTime);
  }
  else if(layoutType.options[layoutType.selectedIndex].text == "Cola"){
    startTime = performance.now();
    cy.layout({name: "cola", flow:  { axis: 'y', minSeparation: 100 }, randomize: true, animate: false, 
    unconstrIter: 50, userConstIter: 100, allConstIter: 200}).run();
    endTime = performance.now();
    evaluate(endTime - startTime);
  }
  else {
    startTime = performance.now();
    cy.layout({name: "random", padding: 20}).run();
    endTime = performance.now();
    evaluate(endTime - startTime);    
  }
});

function loadXMLDoc(fileName) {
	var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else // for IE 5/6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", fileName, false);
    xhttp.send();
    return xhttp.response;
}

function loadSample(fileName){
	var xmlResponse = loadXMLDoc(fileName);

	var fileObj = new File([xmlResponse], fileName, {
		type: "text/plain"
	});

	return fileObj;
}

$("body").on("change", "#samples", function() {
	let samples = document.getElementById("samples");
  let filename = samples.options[samples.selectedIndex].value;
	let graph = loadSample("samples/"+filename+".graphml");
	$("#inputFile").trigger("change", [graph]);
  document.getElementById("fileName").innerHTML = samples.options[samples.selectedIndex].text + ".graphml";
});

$( document ).keydown(function( event ) {
  let keycode = (event.keyCode ? event.keyCode : event.which);
  if ( keycode == 78 ) {
    event.preventDefault();
    cy.add({
        group: 'nodes'
    });
  }
  else if ( keycode == 69 ) {
    event.preventDefault();
    if(cy.nodes(":selected").length == 2)
      cy.add({ group: 'edges', data: {source: cy.nodes(":selected")[0].data("id"), target: cy.nodes(":selected")[1].data("id") } });
  }
  else if ( keycode == 46 ) {
    event.preventDefault();
    cy.elements(":selected").remove();
  }
  else if ( keycode == 76 ) {
    event.preventDefault();
    $("#runLayout").trigger("click");
  }
});

document.getElementById("saveLayoutProperties").addEventListener("click", function(){
  layoutProperties.setCurrentProperties();
});


$('#layoutOptionsModal').on('show.bs.modal', function (e) {
  layoutProperties.setModalValues();
});

export {evaluate};



