let sky, sea, reflection, main;
let size = 10; // Rectangle size
let skyRects = []; // Store rectangles for the sky part
let seaRects = []; // Store rectangles for the sea part
let mainRects = []; // Store rectangles for the main part
let reflectionRects = []; // Store rectangles for the reflection part

function preload() {
    // Preload images
    sky = loadImage('assets/sky.png');
    sea = loadImage('assets/sea.png');
    reflection = loadImage('assets/reflection.png');
    main = loadImage('assets/main.png');
}

function setup() {
    // Set up canvas size and basic drawing parameters
    createCanvas(600, 500);
    noFill();
    textAlign(CENTER, CENTER);
    angleMode(DEGREES); // Set angle mode to degrees
    rectMode(CENTER); // Set rectangle drawing mode to be centered
    noStroke(); // No border for rectangles
    rectInit(); // Initialize rectangles
}

function rectInit() {
    // Initialize rectangles and extract data from images
    sky.resize(width, height);
    sea.resize(width, height);
    reflection.resize(width, height);
    main.resize(width, height);
    
    // Load pixel data for each image
    sky.loadPixels();
    sea.loadPixels();
    reflection.loadPixels();
    main.loadPixels();
    
    // Iterate over the entire canvas to create rectangles based on pixel data
    for (let x = 0; x < width; x += size / 2 ) {
        for (let y = 0; y < height; y += size / 2) {
            let index = (x + y * width) * 4; // Calculate the index in the pixel array
            
            if (sky.pixels[index + 3] > 0) { // Check if the alpha value is greater than 0
                skyRects.push(new Rect(
                    x, y,
                    20, 30, 60, 180, // Night sky color (deep blue)
                    "sky"
                ));
            }

            if (sea.pixels[index + 3] > 0) {
                seaRects.push(new Rect(
                    x, y,
                    20, 30, 50, 150, // Darker blue color for the sea
                    "sea"
                ));
            }

            if (reflection.pixels[index + 3] > 0) {
                reflectionRects.push(new Rect(
                    x, y,
                    20, 30, 50, 150, // Dark blue for reflection area
                    "reflection"
                ));
            }

            if (main.pixels[index + 3] > 0) {
                mainRects.push(new Rect(
                    x, y,
                    40, 40, 40, 200, // Dark gray color for building
                    "main"
                ));
            }
        }
    }
}

function draw() {
    background(255); // Set the background to white to avoid overlap

    for (let i = 0; i < skyRects.length; i++) {
        skyRects[i].drawRect(); // Draw the rectangle
    }

    // Draw all rectangles representing the sea part
    for (let i = 0; i < seaRects.length; i++) {
        seaRects[i].drawRect();
    }

     // Draw all rectangles representing the reflection part
    for (let i = 0; i < reflectionRects.length; i++) {
        reflectionRects[i].drawRect();
    }

    // Draw all rectangles representing the main part
    for (let i = 0; i < mainRects.length; i++) {
        mainRects[i].drawRect();
    }
}

// Rectangle class with static colors for night effect
class Rect {
    constructor(x, y, r, g, b, a, part) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.part = part;
        this.offsetX = random(-2, 2); // Random horizontal offset to simulate brush strokes
        this.offsetY = random(-2, 2); // Random vertical offset
    }

    drawRect() {
        push();
        noStroke();
        fill(this.r, this.g, this.b, this.a * random(0.8, 1)); // Apply color with slight opacity variation
        translate(this.x + this.offsetX, this.y + this.offsetY); // Apply offset
        rotate(random(-0.1, 0.1)); // Slight rotation to simulate brush-like texture
        rect(0, 0, size + random(-1, 1), size + random(-1, 1)); // Draw rectangle with minor size variation
        pop();
    }
}
