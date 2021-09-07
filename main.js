rightwristx=""

rightwristy=""

leftwristx=""

leftwristy=""

song=""

function draw()
{
    image(video, 0, 0, 500, 500);
}

function preload()
{
    song=loadSound("music.mp3")
}

function setup()
{
    canvas=createCanvas(500, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    pose=ml5.poseNet(video, modelLoaded);
    pose.on('pose', gotResults);
}

function play()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function modelLoaded()
{
    console.log("Model has been initialized");
}

function gotResults(pose)
{
    console.log(pose);
    rightwristx=pose[0].pose.rightWrist.x;
    rightwristy=pose[0].pose.rightWrist.y;
    leftwristx=pose[0].pose.leftWrist.x;
    leftwristy=pose[0].pose.leftWrist.y;
    console.log(rightwristx);
    console.log(rightwristy);
    console.log(leftwristx);
    console.log(leftwristy);
}