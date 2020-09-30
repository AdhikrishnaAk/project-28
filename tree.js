   class Tree{
   constructor(x,y,w,h){

      var options={
         isStatic:true
      }


   this.body=Bodies.rectangle(x,y,w,h,options);
   this.width=w;
   this.height=h;
   this.image=loadImage("Plucking mangoes/tree.png")
   World.add(world,this.body)
   }
   display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
   pop()
   }


   }