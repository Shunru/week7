//Bubble Constructor

function Bubble(){

//create x and y properties(variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is for radius whic is 1/2 the width of the circle
    this.bubbleSize = this.r*2; //width and heigh are twice the radius

    //draw the bubble
    ellipse(this.x, this.y, this.bubbleSize, this.bubbleSize);

}//end bubble



function setup(){

   var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent('windows');

    var myArray = [];//create blank array
    //add stuff to the array with a loop
    for(var i=0; i<10; i++){
        //myArray[i] = "item" + i;
        myArray[i] = new Bubble();
    }
    //log out the array
    console.log(myArray);
    //loop to go through every item in the array
    for(var i=0; i< myArray.length; i++){
      //  myArray[i]+=10;
        console.log(myArray[i]);
    }
    console.log(myArray);
   // console.log(myArray[0]);
    //console.log(myArray[1]);
    //console.log(myArray[2]);
    //console.log(myArray);

   // console.log("myArray",myArray);



}//end setup
