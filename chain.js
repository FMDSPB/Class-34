class Chain {
    constructor(bodyA, pointB) {
        let options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.0,
            length : 100
        }

        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    display() {

        let pA = this.chain.bodyA.position;
        let pB = this.pointB;
        push();
        stroke("white");
        line(pA.x, pA.y, pB.x, pB.y);
        pop();

    }
}