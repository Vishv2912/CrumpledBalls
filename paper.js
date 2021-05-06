class paper extends trashedCan{
    constructor(x,y,r){
super(200,200,2,2,2);
this.image=loadImage("paper.png")

   }
    display(){
  super.display();
  image(this.image,0,0,1);

    }

 }
 
