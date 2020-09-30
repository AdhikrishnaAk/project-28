class Rope{
    constructor(a,b){
    
    var options={
      bodyA:a,
        pointB:b,
        length:10,
        stiffness:0.5
    }
    
    
    this.pointB=b
    
      this.chains=Matter.Constraint.create(options)
      World.add(world,this.chains)
    }
    display(){
     
        
        if(this.chains.bodyA){
          strokeWeight(3) 
         
          line(this.chains.bodyA.position.x,this.chains.bodyA.position.y,
              this.pointB.x,this.pointB.y)
        }
    }
    
    fly(){
      this.chains.bodyA=null
    }
    
    }