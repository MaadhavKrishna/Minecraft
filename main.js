$( window).load(function() {
    var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_image_width = 100;
var block_image_height = 100;

var player_object = "";
var block_image_object = "";

var player_img="player.png";

player_update();
function player_update() {
    fabric.Image.fromURL(player_img, function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_object);
    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);

        block_image_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keyC = e.keyCode;
    if (e.shiftKey == true && keyC == '80') {
        console.log("shif and p is pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("c_width").innerHTML = " Current Width  = " + block_image_width;
        document.getElementById("c_height").innerHTML = "Current Height  = " + block_image_height;
    }
    if (e.shiftKey == true && keyC == '77') {
        console.log("shif and m is pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("c_width").innerHTML = " Current Width  = " + block_image_width;
        document.getElementById("c_height").innerHTML = "Current Height  = " + block_image_height;
    }
    if(keyC==37){
        left();
        console.log("left");
    }
    if(keyC==38){
        up();
        console.log("up");
    }
    if(keyC==39){
        right();
        console.log("right");
    }
    if(keyC==40){
        down();
        console.log("down");
    }
    if(keyC==67){
        new_image("cloud.jpg");
        console.log("cloud");
    }
    if(keyC==68){
        new_image("dark_green.png");
        console.log("dark_green");
    }
    if(keyC==71){
        new_image("ground.png");
        console.log("ground");
    }
    if(keyC==76){
        new_image("light_green.png");
        console.log("light_green");
    }
    if(keyC==82){
        new_image("roof.jpg");
        console.log("roof");
    }
    if(keyC==84){
        new_image("trunk.jpg");
        console.log("trunk");
    }
    if(keyC==85){
        new_image("unique.png");
        console.log("unique");
    }
    if(keyC==87){
        new_image("wall.jpg");
        console.log("wall");
    }
    if(keyC==89){
        new_image("yellow_wall.png");
        console.log("yellow_wall");
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-10;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=1000){
        player_x=player_x+10;
        canvas.remove(player_object);
        player_update();
    }
}

function up(){
    if(player_y>=0){
        player_y=player_y-10;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+10;
        canvas.remove(player_object);
        player_update();
    }
}

function i_open(){
    window.location="Instructions.html"
}

});
