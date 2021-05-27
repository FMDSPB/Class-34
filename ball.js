class Ball {
    constructor(x, y, width, height) {
        let options = {

            frictionAir:0.005,
            density:1.0,
            
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display() {
        
        let pos = this.body.position;
        push();
        rotate(this.body.angle)
        //ellispeMode(CENTER);
        ellipse(pos.x, pos.y, this.width, this.height);
        pop();
    }
}