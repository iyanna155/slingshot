class SlingShot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness: 1,
            length: 4
        }
        this.Sling = Constraint.create(options)
        World.add(world,this.Sling)
    }
    display(){
        strokeWeight(5)
        line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.Sling.bodyB.position.x,this.Sling.bodyB.position.y)
    }
}