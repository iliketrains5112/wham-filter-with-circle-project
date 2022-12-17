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
    image(video, 0, 0, 500, 500);
    tint(tint_color);
    fill("red");
    circle(25, 25, 50, 50)
    fill("red");
    circle(475, 475, 50, 50)
    fill("red");
    circle(25, 475, 50, 50)
    fill("red");
    circle(475, 25, 50, 50)
}

function take_snapshot(){
    save('filtered_picture.png');
}

function applyFilter(){
    tint_color=document.getElementById("tint_colour_input").value;
}