class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0,

        }
        this.radius=radius;

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        
       
    }
    display(){
        
        ellipesMode(REDIUS);
        fill("red");
        ellipes(this.body.position.x,this.body.position.y,this.radius,this.radius);
       
    }
}