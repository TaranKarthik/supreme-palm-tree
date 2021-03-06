function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);

    ctx = createCanvas(550,500);
    ctx.position(560,150);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',function(results){
        console.log(results);
    })
}

function modelLoaded(){
    console.log("lol ml5 ready");
}
function draw(){
    background(45);
}