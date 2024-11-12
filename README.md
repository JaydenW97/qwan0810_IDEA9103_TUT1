# qwan0810_9103_TUT1

## Time Based Monet Style Animation - Final Iteration

### Project Description
In this final version of the code, the representation of the gradient night effect has been further improved to ensure that the resulting image more realistically represents the transition from dusk to night. Compared to the second iteration, the main changes are in the control of the colour gradient so that the night effect is not completely dark and the style of the painting remains the same. The colour of the buildings is also gradually changed to the dark grey tones of the night.

### Interaction Description
The artwork automatically starts showing a time gradient from dusk to night after the page loads.

The animation completes the colour gradient in about 20 seconds and the final effect is a darker shade of night.

### Final Iteration - Change Details
Progress control: I added the finalNightProgress variable to keep the final effect of the night at 80% complete, avoiding the creation of a completely dark image and allowing the night to retain some detail. This makes the night transition smoother and more layered.

Final adjustments to building colours: In contrast to the second iteration, in this version the building colours are gradually transitioned to a darker grey in the move() function, rather than simply using a static night colour. By doing this, the buildings don't completely lose their layers at night, but instead take on a dark grey colour for the night.

Other parts of the adjustment: a softer colour gradient for the waves and the sky, and the use of random transparency and rotation to make each rectangle look more like an oil painting brushstroke as it is drawn.

### Technical implementation explanation
Colour interpolation: In the move() function, use the lerpColor() method to gradually interpolate the initial sunset colour to the darker colour of the night. Avoid complete darkening of the night effect by controlling the maximum value of progress to finalNightProgress.

Gradient detail enhancement: random(-2, 2) applies small offsets to the x and y coordinates of each rectangle and adds a random rotation angle in the drawRect() function to give the image a fine gradient and texture.


