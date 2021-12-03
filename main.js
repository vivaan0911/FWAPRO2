mustacheX = 0;
mustacheY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/SQ8DhjtZ/mustache.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("pose net initialized");
}

function gotPoses(results) {
    console.log(results);
    if (results.length > 0) {
        mustacheX = results[0].pose.nose.x - 25;
        mustacheY = results[0].pose.nose.y - 15;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX, mustacheY, 70, 70);
}

function take_snapshot() {
    save('mustache_filter.png');
}
