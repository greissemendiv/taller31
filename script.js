const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function toCanvasY(y){
    return canvas.height - y;
}

function drawAxes(){

    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    // Eje X
    ctx.beginPath();
    ctx.moveTo(0, toCanvasY(0));
    ctx.lineTo(canvas.width, toCanvasY(0));
    ctx.stroke();

    // Eje Y
    ctx.beginPath();
    ctx.moveTo(0, toCanvasY(0));
    ctx.lineTo(0, toCanvasY(canvas.height));
    ctx.stroke();
}

drawAxes();