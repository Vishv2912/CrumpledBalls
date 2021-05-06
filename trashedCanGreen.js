class trashedCanGreen {
    constructor(x,y,r){
        var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0,
        'density':1.2
        }
        this.y=y;
        this.x=x;
        this.r=r;
        this.body=Bodies.circle(x,y,-100,options);
        World.add(world, this.body);
        this.image=loadImage("trashcangreen.png")
        
        
        
            }
        display(){
          this.body.position.x=mouseX;
          this.body.position.y=mouseY;
            
            var pos =this.body.position;
            var angle =this.body.angle;
        
            push();
            fill("green")
            imageMode(CENTER);
            translate(pos.x,pos.y);
            rotate(angle);
           
            image(this.image,0,0,50,50);
        
            pop();
        
        
        
        
        
        }
        
        }