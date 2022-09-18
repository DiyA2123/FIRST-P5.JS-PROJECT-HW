function preload(){

}

function setup(){
    canvas= createCanvas(640,480);
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
 image(video,0,0,640,480); 
 stroke(0,100,0); rect(50,30,500,50);
 stroke(0,100,0); rect(50,410,500,50);
 stroke(0,100,0); rect(555,410,50,-350);
 stroke(0,100,0); rect(30,410,50,-350);
 c = color('#1f0');
fill(c);
 stroke(0,100,0); circle(50,50,70); 
 stroke(0,100,0); circle(50,435,70); 
 stroke(0,100,0); circle(573,50,70); 
 stroke(0,100,0); circle(573,435,70);
}



function take_snapshot(){
    save("diya.png");
}