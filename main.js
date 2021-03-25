const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

player_object = "";
block_image_object = "";

function player_update (){
    fabric.Image.fromURL("player.png", function (Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        });

};
function new_image(get_img){
    fabric.Image.fromURL(get_img, function (Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("my_keydown", my_keydown);

function my_keydown(){
    if (keyPressed == '70'){
        new_image ('ironman_face.png');
        console.log("f")
    }
    if (keyPressed == '61'){
        new_image('spiderman_body.png');
        console.log("b");
    }
    if (keyPressed == '76'){
        new_image('hulk_legs.png');
        console.log("l")
    }
    if (keyPressed == '82');{
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if (keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("h")
    }
    if (keyPressed == '38'){
        console.log("up");
        up();
    }
    if (keyPressed == '40'){
        console.log("down");
        down() ;
    }
    if (keyPressed == '37'){
        console.log("left");
        left();
    }
    if (keyPressed == '39'){
        console.log("right")
        right();
    }
}
function up(){
    if(player_y <=0){
        player_y = player_y - block_image_height;
        console.log("block image height" + block_image_height);
        console.log("When up arrow is pressed x is" + player_x + "y is" +player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y>=500){
        player_y = player_y + block_image_height;
        console.log("block image height" + block_image_height);
        console.log("When down arrow is pressed x is" + player_x +"y is" + player_y);
        canvas.remove(player_object);
        player_update()        
    }
}
function left(){
    if(player_x >=800){
        player_x = player_x - block_image_width;
        console.log("block image width" + block_image_width);
        console.log("When left arrow is pressed x is" + player_x +"y is" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <=0){
        player_x = player_x - block_image_width;
        console.log("block image width" = block_image_width);
        console.log("When right arrow is pressed x is" + player_x +"y is" + player_y);
        canvas.remove(player_object);
        player_update;
    }
}