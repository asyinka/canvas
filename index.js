let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let smallCanvas = document.getElementById("secondCanvas");
let secondContext = smallCanvas.getContext("2d");

function moveTo(x, y){
    return context.moveTo(x, y);
}
function lineTo(x, y){
    return context.lineTo(x, y);
}
function move(x, y){
    return secondContext.moveTo(x, y);
}
function line(x, y){
    return secondContext.lineTo(x, y);
}


context.beginPath();
moveTo(200, 100); //start Line at
lineTo(200, 450); //end line at or draw line to
//Draw Triangle
moveTo(275, 0);
lineTo(0, 275);
lineTo(550, 275);
lineTo(275, 0);
context.strokeStyle = "green"
context.stroke();

context.beginPath();
context.strokeStyle = "yellow"
moveTo(0, 0);
lineTo(275, 275);
// moveTo(275, 275);
lineTo(275, 550);
moveTo(275, 275);
lineTo(550, 0);
context.stroke();

//Draw Rectangle
context.fillStyle = "red"; //fill colour
context.fillRect(275, 275, 275, 275); //rectangle without border
context.strokeStyle = "black"; //border colour
context.strokeRect(0, 275, 275, 275); //rectangle with border

//Draw Circle
secondContext.beginPath();
secondContext.arc(150, 150, 100, 0, 2 * Math.PI); //(x, y, radius, startAngle, endAngle, *counter Clockwise)
secondContext.fillStyle = "yellow";
secondContext.fill();
secondContext.lineWidth = 10;
secondContext.strokeStyle = "purple";
secondContext.stroke()


20 === 20 ? console.log(`who are you?`) : console.log(`you dont speak machine`);

console.log(10 === 000010);

