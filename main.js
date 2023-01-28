function preload() {
    img=loadImage('livingroomsets.png');
}
function setup() {
canvas=createCanvas(480,380);
canvas.center();
video= createCapture(VIDEO);
video.size(380,380);
video.hide();
}
function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results)
    objects=results;
}
function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(video,gotResult);
}







