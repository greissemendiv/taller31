const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const scenes = [

    // Dentro
    {x1:150, y1:150, x2:300, y2:250},

    // Fuera
    {x1:20, y1:20, x2:80, y2:80},

    // Entrando
    {x1:50, y1:150, x2:200, y2:200},

    // Saliendo
    {x1:200, y1:200, x2:500, y2:350},

    // Cruzando
    {x1:50, y1:50, x2:500, y2:400}
];

let currentScene = 0;

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

function drawViewport(xmin, ymin, xmax, ymax){

    drawLine(xmin, ymin, xmax, ymin, "yellow");

    drawLine(xmax, ymin, xmax, ymax, "yellow");

    drawLine(xmax, ymax, xmin, ymax, "yellow");

    drawLine(xmin, ymax, xmin, ymin, "yellow");
}

function renderScene(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const xmin = parseInt(document.getElementById("xmin").value);
    const ymin = parseInt(document.getElementById("ymin").value);
    const xmax = parseInt(document.getElementById("xmax").value);
    const ymax = parseInt(document.getElementById("ymax").value);

    drawViewport(xmin,ymin,xmax,ymax);

    const line = scenes[currentScene];

    drawLine(
        line.x1,
        line.y1,
        line.x2,
        line.y2,
        "red"
    );
}

document.getElementById("nextBtn").onclick = () => {

    currentScene++;

    if(currentScene >= scenes.length){
        currentScene = 0;
    }

    renderScene();
};

document.getElementById("prevBtn").onclick = () => {

    currentScene--;

    if(currentScene < 0){
        currentScene = scenes.length - 1;
    }

    renderScene();
};

renderScene();