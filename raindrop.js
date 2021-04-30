class RainDrops {
    constructor(x, y, radius) {
        var DropOptions = {
            frictionAir : 0.01,
            friction : 1.0,
            slop : 1
        }

        this.body = Bodies.circle(x, y, radius, DropOptions);
        this.radius = 4;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill(rgb(0, 0, 255));
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }

    update() {
        if(this.body.position.y > 600) {
            Matter.Body.setPosition(this.body, {x:random(0, 700), y:random(0, 100)});
        }
    }

}