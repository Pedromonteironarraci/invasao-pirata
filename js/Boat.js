class Boat {
    constructor(x, y, w, h, boatPos,boatAnimation) {
        this.w = w
        this.h = h
        this.boatPos = boatPos
        this.boatAnimation = boatAnimation
        this.speed=0.05
        this.isBroken=false
        this.image = loadImage("./assets/boat.png")
        this.body = Bodies.rectangle(x, y, w, h, boatPos)
        World.add(world, this.body)
        this.body.debug=true
    }

    animate(){
        this.speed+=0.05
    }

    remove(index){
        this.boatAnimation=brokenboatAnimation
        this.speed=0.05
        this.width=300
        this.height=300
        this.isBroken=true
        setTimeout(() => {
            Matter.World.remove(world,boats[index].body)
            delete boats[index]
        }, 2000);
    }

    

    display() {
        var pos = this.body.position
        var angle = this.body.angle
        var index=floor(this.speed%this.boatAnimation.length)

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.boatAnimation[index], 0, this.boatPos, this.w, this.h)
        pop()
    }
}