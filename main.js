function preload(){
    
}

function setup(){
canvas = createCanvas(500,500);
video=createCapture(VIDEO);
canvas.position(225, 300)
video.hide();
tint_color="";
}

function draw(){
    image(video, 200, 200, 150, 150);
    tint(tint_color);
    fill("red");
    circle(25, 25, 50, 50)
    circle(475, 475, 50, 50)
    circle(25, 475, 50, 50)
    circle(475, 25, 50, 50)
    fill("green");
    rect(50, 25, 400, 10);
    rect(50, 475, 400, 10);
    rect(25, 50, 10, 400);
    rect(475, 50, 10, 400);
}

function take_snapshot(){
    save('filtered_picture.png');
}

function applyFilter(){
    tint_color=document.getElementById("tint_colour_input").value;
}