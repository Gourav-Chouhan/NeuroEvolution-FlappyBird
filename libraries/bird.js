class Bird {
    constructor() {
        this.x = width * 0.1;
        this.y = height / 2;
        this.r = 30;
        this.v = 0;
        this.g = 0.4;
        this.brain = new Network([3, 8, 2]);
        this.fitness = 0;
    }
    fly() {
        this.fitness++;
        fill("yellow");
        circle(this.x, this.y, this.r * 2);
        if (this.y < height - this.r - 5) {
            this.y += this.v;
            this.v += this.g;
        }
    }

    use_brain(pipes) {
        // let closest
        // input = []
        let closest_index = 0;
        let max_dist = 0;
        for (let i = 0; i < pipes.length; i++) {
            let distt = pipes[i].x + pipes[i].width - width * 0.1;
            if (distt < max_dist && distt > 0) {
                closest_index = i;
            }
        }
        let i1 = map(this.y, 0, height, 0.0001, 0.9999);
        let i2 = map(pipes[closest_index].y + pipes[closest_index].gap / 2, pipes[closest_index].gap / 2, height - pipes[closest_index].gap / 2, 0.001, 0.999);
        let i3 = map(pipes[closest_index].x + pipes[closest_index].width / 2, 0, width, 0.0001, 0.9999);
        let output = this.brain.feed_forward([i1, i2, i3]);
        if (output.matrix[0][0] > output.matrix[1][0]) {
            this.jump();
        }
        // if (this.y + this.r + 5 > pipes[closest_index].y + pipes[closest_index].gap) this.jump();
        // console.log(output);
    }

    is_dead(pipes) {
        if (this.y + this.r > height - 5 || this.y - this.r < 0) return true;
        for (let pipe of pipes) {
            if (this.x + this.r >= pipe.x && this.x - this.r <= pipe.x + pipe.width) {
                if (this.y + this.r >= pipe.y + pipe.gap || this.y - this.r <= pipe.y) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        return false;
    }

    jump() {
        for (let i = 0; i < 5; i++) {
            this.y--;
        }
        this.v = -6;
    }

}