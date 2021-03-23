let bubbles = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    // for (let i = 0; i < 5; i++) {
    // let x = random(width);
    // let y = random(height);
    // let r = random(10, 50);
    // let makeBubble = new Bubble (x, y, r);
    // bubbles.push(makeBubble);
    // }
}
function mouseDragged() {
    // function mousePressed() {
        let r = random(10, 50);
        let makeBubble = new Bubble (mouseX, mouseY, r)
        bubbles.push(makeBubble);
        // for (let i = bubbles.length - 1; i >= 0; i --) {
        //     // bubbles[i].clicked(mouseX, mouseY);
        //     if (bubbles[i].rollover(mouseX, mouseY)) {
        //         bubbles.splice(i, 1);
        //     }
        // }
    }
//function mouseDragged() {
function mousePressed() {
    // let r = random(10, 50);
    // let makeBubble = new Bubble (mouseX, mouseY, r)
    // bubbles.push(makeBubble);
    for (let i = bubbles.length - 1; i >= 0; i --) {
        // bubbles[i].clicked(mouseX, mouseY);
        if (bubbles[i].rollover(mouseX, mouseY)) {
            bubbles.splice(i, 1);
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].rollover(mouseX, mouseY)) {
            bubbles[i].changeColor(255);
        }
        else {
            bubbles[i].changeColor(0);
        }
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }
    // clicked(locationX, locationY) {
    //     let d = dist(locationX, locationY, this.x, this.y)
    //     if (d < this.r) {
    //         this.brightness = 255;
    //         // console.log("circle clicked");
    //     }
    // }
    changeColor(bright) {
        this.brightness = bright;
    }
    rollover(locationX, locationY) {
        let d = dist(locationX, locationY, this.x, this.y)
        if (d < this.r) {
            return true;
        }
        else {
            return false;
        }
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 100);
        ellipse(this.x, this.y, this.r * 2);
    }
}


