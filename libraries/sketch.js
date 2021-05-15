let birds = [];
let pipes = [];
let population = 1000;
let generation = 1;
let mutation_rate = 1;
let died_birds = [];

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < population; i++) {
        birds[i] = new Bird();
    }
    pipe = new Pipe();
    pipes.push(pipe);
}

function draw() {
    background(51);
    if (birds.length == 0) {
        for (let i = 0; i < population; i++) {
            birds[i] = new Bird();
        }
        // let total_fitnes = total_fitness(died_birds);
        // generation++;
        // console.log("GEN: " + generation);
        // let child_got = 0;
        // while (child_got <= population) {

        //     let bird = random(died_birds);
        //     let child;
        //     if (bird.fitness / total_fitnes > random()) {
        //         bird.brain.mutate(mutation_rate);
        //         child = new Bird();
        //         child.brain = bird.brain;
        //         // console.log(bird);
        //         birds.push(child);
        //         child_got++;
        //     }
        // }
        // died_birds = [];
        pipe = new Pipe();
        pipes = [pipe];
    }
    for (let bird of birds) {
        bird.fly();
        bird.use_brain(pipes);
    }

    for (let i = 0; i < birds.length; i++) {
        if (birds[i].is_dead(pipes)) {
            died_birds.push(birds[i]);
            birds.splice(i, 1);
        }
    }

    //--

    for (let i = 0; i < pipes.length; i++) {
        // let closest_index = 0;
        // let max_dist = 400;

        pipes[i].move();
        if (pipes[pipes.length - 1].x == 250) {
            pipe = new Pipe();
            pipes.push(pipe);
        }
        if (pipes[0].x <= -pipes[0].width - 5) {
            pipes.shift();
        }
        //------------------

        // let distt = pipes[i].x + pipes[i].width - width * 0.1;
        // if (distt < max_dist && distt > 0) {
        //     closest_index = i;
        //     pipes[closest_index].color = "yellow";
        // } else {
        //     pipes[i].color = "green";
        // }
    }
}

function total_fitness(died) {
    let ans = 0;
    for (bird of died) {
        ans += bird.fitness;
    }
    return ans;
}

function mousePressed() {
    birds[0].jump();
}