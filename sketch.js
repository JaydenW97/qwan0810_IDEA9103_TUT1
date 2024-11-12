let sky, sea, reflection, main;
let size = 10; // Rectangle size
let skyRects = []; // Store rectangles for the sky part
let seaRects = []; // Store rectangles for the sea part
let mainRects = []; // Store rectangles for the main part
let reflectionRects = []; // Store rectangles for the reflection part
let transitionTime = 20000; // 20 seconds transition time
let startTime;  // Record the start time

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
    rectInit();  // Initialize rectangles
    startTime = millis(); // Record start time
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

            // Sky Rectangles
            if (sky.pixels[index + 3] > 0) { // Check if the alpha value is greater than 0
                skyRects.push(new Rect(
                    x, y,
                    sky.pixels[index],
                    sky.pixels[index + 1],
                    sky.pixels[index + 2],
                    sky.pixels[index + 3],
                    "sky"
                ));
            }

            // Sea Rectangles
            if (sea.pixels[index + 3] > 0) {
                seaRects.push(new Rect(
                    x, y,
                    sea.pixels[index],
                    sea.pixels[index + 1],
                    sea.pixels[index + 2],
                    sea.pixels[index + 3],
                    "sea"
                ));
            }

            // Reflection Rectangles
            if (reflection.pixels[index + 3] > 0) {
                reflectionRects.push(new Rect(
                    x, y,
                    reflection.pixels[index],
                    reflection.pixels[index + 1],
                    reflection.pixels[index + 2],
                    reflection.pixels[index + 3],
                    "reflection"
                ));
            }

            // Main Rectangles
            if (main.pixels[index + 3] > 0) {
                mainRects.push(new Rect(
                    x, y,
                    main.pixels[index],
                    main.pixels[index + 1],
                    main.pixels[index + 2],
                    main.pixels[index + 3],
                    "main"
                ));
            }
        }
    }
}

function draw() {
    background(255); // Set the background to white to avoid overlap

    let elapsedTime = millis() - startTime; // Calculate elapsed time
    let progress = constrain(elapsedTime / transitionTime, 0, 1); // Calculate progress of the transition (0 to 1)

    // Draw all rectangles representing the sky part
    for (let i = 0; i < skyRects.length; i++) {
        skyRects[i].move(progress);
        skyRects[i].drawRect();
    }

    // Draw all rectangles representing the sea part
    for (let i = 0; i < seaRects.length; i++) {
        seaRects[i].move(progress);
        seaRects[i].drawRect();
    }

    // Draw all rectangles representing the reflection part
    for (let i = 0; i < reflectionRects.length; i++) {
        reflectionRects[i].move(progress);
        reflectionRects[i].drawRect();
    }

    // Draw all rectangles representing the main part
    for (let i = 0; i < mainRects.length; i++) {
        mainRects[i].move(progress);
        mainRects[i].drawRect();
    }
}

// Rectangle class with gradual transition effect
class Rect {
    constructor(x, y, r, g, b, a, part) {
        this.x = x; // Rectangle x-coordinate
        this.y = y; // Rectangle y-coordinate
        this.startR = r; // Initial red value
        this.startG = g; // Initial green value
        this.startB = b; // Initial blue value
        this.a = a; // Alpha (transparency)
        this.part = part; // Part type (sky, sea, reflection, or building)
        this.offsetX = random(-2, 2);  // Random horizontal offset to simulate brushstrokes
        this.offsetY = random(-2, 2); // Random vertical offset

        // Set night colors for each part
        if (this.part === "sky") {
            this.endColor = color(20, 30, 60); // Night sky color
        } else if (this.part === "sea" || this.part === "reflection") {
            this.endColor = color(20, 30, 50, random(100, 150)); // Darker sea color with slight highlights
        } else if (this.part === "main") {
            this.endColor = color(this.startR * 0.4, this.startG * 0.4, this.startB * 0.4); // Darker building color
        }
    }

    // Move function to calculate color transition effect
    move(progress) {
        let targetColor = lerpColor(color(this.startR, this.startG, this.startB), this.endColor, progress);
        
        // Update rectangle's RGB values to the interpolated color
        this.r = red(targetColor);
        this.g = green(targetColor);
        this.b = blue(targetColor);
    }

    drawRect() {
        push();
        noStroke();
        fill(this.r, this.g, this.b, this.a * random(0.8, 1)); // Apply color with slight transparency variation
        translate(this.x + this.offsetX, this.y + this.offsetY); // Offset to simulate brushstroke effect
        rotate(random(-0.1, 0.1)); // Slight rotation for randomness
        rect(0, 0, size + random(-1, 1), size + random(-1, 1)); // Draw rectangle with slight size variation
        pop();
    }
}

