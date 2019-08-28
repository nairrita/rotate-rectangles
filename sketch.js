
var angle=0;
var angle1=0;
var angle2=0;
var angle3=0;

function setup(){
    createCanvas(600,400);
    angleMode(DEGREES);
}

function draw(){
    background(0);

    push();
    translate(300,300);
    rotate(-angle1);
    fill("orange");
    rect(0,0,50,100);
    angle1=angle1+8;
    pop();
    

    push();
    translate(150,150);
    rotate(angle);
    fill("red");
    rect(0,0,50,100);
    angle=angle+8;
    pop();

    push();
    translate(300,80);
    rotate(angle2);
    fill("green");
    rect(0,0,50,100);
    angle2=angle2+8;
    pop();

    push();
    translate(400,250);
    rotate(-angle3);
    fill("pink");
    rect(0,0,50,100);
    angle3=angle3+8;
    pop();
}