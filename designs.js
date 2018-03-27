// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(){
    var canvasHeight = $("#inputHeight").val();
    var canvasWidth = $("#inputWeight").val();
    var canvas = $("#pixelCanvas");

canvas.empty(); //Clear canvas

//create grids
for (i = 0; i < canvasHeight; i++){
    canvas.append("<tr></tr>");
}

var row = $("tr");  
for (x = 0; x < canvasWidth; x++){
    row.append("<td></td>");
}

//color cells of the canvas by clicking on cell
var canvasCell = canvas.find("td");

canvasCell.click(function(event){
    var color = $("#colorPicker").val();
    $(this).attr("bgcolor", color);
    console.log("Use Shiftkey + click to delete selected color");
    if(event.shiftKey){
        $(this).attr("bgcolor", "white"); //delete selected color;
    }
});

}

//call the makeGrid() function after size has been submitted
var submitSize = $("input[type ='submit']");

submitSize.click(function(event){
    event.preventDefault();
    makeGrid();
});
