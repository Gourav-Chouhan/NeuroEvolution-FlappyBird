class Pipe {
    constructor() {
        this.x = width;
        this.gap = random(150, 200);
        this.y = random(height * 0.1, height * 0.9 - this.gap);
        this.v = 2;
        this.color = "green";
        this.width = 70;
    }
    move() {
        fill(this.color);
        rect(this.x, 0, this.width, this.y);
        rect(this.x, this.y + this.gap, this.width, height - this.gap - this.y);
        this.x -= this.v;
    }
}