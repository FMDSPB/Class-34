class Box {
    constructor(x, y, width, height) {

        let options = {
            isStatic : false,
            friction:1,
            density : 0.09,
            restitution : 1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display() {

        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        strokeWeight(4);
        stroke("white");
        rect(0, 0, this.width, this.height);
        pop();
    }
}