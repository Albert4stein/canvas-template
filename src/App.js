import {drawPicture, onClick} from "./canvas";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() { 
    ctx.fillRect(50, 100, 400, 300);
    ctx.fillStyle = "blue";
    ctx.fillRect(25, 75, 100, 145);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(300, 100, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = "green";
    ctx.arc(300, 100, 50, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(400, 500, 100, 100);
    ctx.fillStyle = "black";
    ctx.font = "48px serif";
    ctx.fillText("Quadrat", 450, 550);
    drawPicture(ctx, "black_bishop.svg", 300, 300)

}

document.addEventListener("DOMContentLoaded", function () {
    draw();
})
