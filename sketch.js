let video;
let poseNet;
let glasses;
let eyeL, eyeR;

let ang, d, scl;
let ready = false;

preload = () => {
    glasses = loadImage("hopeful.png");
}

setup = () => {
    createCanvas(windowWidth, windowHeight);
    cam = createCapture(VIDEO);
    cam.hide();
    cam.size(windowWidth, windowHeight);
    poseNet = ml5.poseNet(cam, modelReady);
    poseNet.on('pose', gotPoses);

    eyeL = createVector(0, 0);
    eyeR = createVector(0, 0);
}

let gotPoses = (poses) => {
    //console.log(poses);
    //only detect if there is a person
    if (poses.length > 0) {
        //work out angle between eyes
        ang = atan2(poses[0].pose.keypoints[2].position.y - poses[0].pose.keypoints[1].position.y, poses[0].pose.keypoints[2].position.x - poses[0].pose.keypoints[1].position.x);
        //distance between eyes so can work out scale
        d = int(dist(poses[0].pose.keypoints[1].position.x, poses[0].pose.keypoints[1].position.y, poses[0].pose.keypoints[2].position.x, poses[0].pose.keypoints[2].position.y));
        scl = map(d, 0, 290, 0, 1.8);

        eyeL.x = poses[0].pose.keypoints[1].position.x;
        eyeL.y = poses[0].pose.keypoints[1].position.y;
        eyeR.x = poses[0].pose.keypoints[2].position.x;
        eyeR.y = poses[0].pose.keypoints[2].position.y;


    }
}

let modelReady = () => {
    console.log('model ready');
    ready = true;
}

draw = () => {
    image(cam, 0, 0, width, height);

    if (ready) {

        //find the mid point between the eyes
        let midX = ((eyeR.x - eyeL.x) / 2) + eyeL.x;
        let midY = ((eyeR.y - eyeL.y) / 2) + eyeL.y;


        push();
        //position between eyes
        translate(midX, midY);
        //rotate based on angle between eyes
        rotate(ang + PI);
        //scale to fit
        scale(scl);
        //place image
        image(glasses, 0 - glasses.width / 2, 0 - glasses.height / 2);
        pop();
    }

}
