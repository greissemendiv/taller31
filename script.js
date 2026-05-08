const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function toCanvasY(y){
    return canvas.height - y;
}

function drawPixel(x, y, color="white"){

    ctx.fillStyle = color;

    ctx.fillRect(
        Math.round(x),
        Math.round(toCanvasY(y)),
        1,
        1
    );
}

function drawLine(x1, y1, x2, y2, color="white"){

    let dx = x2 - x1;
    let dy = y2 - y1;

    let steps = Math.max(Math.abs(dx), Math.abs(dy));

    let xIncrement = dx / steps;
    let yIncrement = dy / steps;

    let x = x1;
    let y = y1;

    for(let i=0; i<=steps; i++){

        drawPixel(x, y, color);

        x += xIncrement;
        y += yIncrement;
    }
}

function drawAxes(){

    drawLine(0,0,canvas.width,0,"white");
    drawLine(0,0,0,canvas.height,"white");
}

drawAxes();

drawLine(50,50,300,200,"red");