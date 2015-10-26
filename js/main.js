//globel variables
 var myArray = [];//create blank array
//bubble structor
function Bubble(){

//create x and y properties(variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is for radius whic is 1/2 the width of the circle
    this.bubbleSize = this.r*2; //width and heigh are twice the radius
    r = random(255);
    g = random(255);
    b = random(255);

    //method:draw the bubble
    this.drawBubble = function(){

       fill(r,g,b);
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);
    }
    this.changeColor = function(){
        console.log("changeColor");
        r = random(255);
        g = random(255);
        b = random(255);
        this.drawBubble();

    }
}//end bubble



function setup(){

   var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('windows');


    //add stuff to the array with a loop
    for(var i=0; i<100; i++){
        //myArray[i] = "item" + i;
        myArray[i] = new Bubble();
        myArray[i].drawBubble();
    }



}//end setup

//listen for mouse presses with the built-in p5 mousePressed method
function mousePressed(){
//check that this is woking
    console.log("mouse Pressed");
//loop through myArray and check if mouse is in each Bubble

    //console.log(myArray);
    var d;
    for(var i=0; i < myArray.length;i++){

       // myArray[i].x myArray[i].r

        d = dist(mouseX, mouseY,myArray[i].x,myArray[i].y);
       // console.log("distance",d);

        //check to see if the distance is less than the radius
        //ie is the mouse in th bubble
        if(d< myArray[i].r){
   myArray[i].changeColor();
        //console.log("mouse in bubble");

        }
    }

}
