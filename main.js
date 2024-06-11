noseX=0;
noseY=0;
differece = 0;
rightWristX = 0;
leftWrist = 0;

 function setup () {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNEt.on('pose', gotPoses);
 }

 function modelLoaded(){
    console.log('PoseNet Is Initialized!');
 }


 function gotPoses(results)
 {
    if(results.length > 0)
        {
            console.log(results);
            noseX = results [0].pose.nose.x;
            noseY = results [0].pose.nose.y;
            console.log("noseX =" + noseX +"noseY =" + noseY);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);

            console.log("leftWiristX =" + leftWristX + " rightWristX ="+ rigthWristX + " differece =" + difference);
        }
 }

 function draw() {
    background('3969A97');

       document.getElementById("square_side").innerHTML = "El ancho y alto del cuadrado será = " + difference +"px";
       fill('#F90093');
       stroke('#F90093');
       square(noseX, noseY, difference);
 }
 