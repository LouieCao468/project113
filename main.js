function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 290);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("green");
    circle(100, 100, 50);
}