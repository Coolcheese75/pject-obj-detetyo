img = "";
status = "";
var objects = [];

function preload()
{
img = loadImage("sit.jpg");
}

function setup()
{
    canvas = createCanvas(640 , 380);
    canvas.center();
    objectdetectu = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : SCANNING...";
}

function draw()
{
    image(img ,0 ,0 ,640 ,380);

    if (status != "")
    {
        for (i = 0; i<objects.length; i++)
        {

         document.getElementById("status").innerHTML = "status : Objects Identified";

    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}

function modelLoaded()
{
    console.log("loaded model!");
    status = true;
    objectdetectu.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}