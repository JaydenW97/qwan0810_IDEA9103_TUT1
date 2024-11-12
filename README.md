# qwan0810_9103_TUT1

## Time Based Monet Style Animation - Iteration 2

### Project Description
This stage presents the change from dusk to night with mainly time-based transition effects. The animation starts from early dusk and gradually moves into the night scene, with a colour gradient effect allowing the sky, ocean, reflections and architecture to show the visual transition from dusk to night.

### Interaction Description
Load page: open the project file in the browser and the animation will start automatically.

Observe the transition effect: the canvas will gradually change from a dusk to a night state for about 20 seconds.

### Iteration 2: Technical details
#### Realisation method
The colour gradient is driven by time-based transitions.

Over time, the colours in the canvas are gradually changed from day tones to night tones using the lerpColor() function.

#### Adjustments
Gradually change the sky from light blue to dark blue to simulate the change from dusk to night.

A deeper blue colour is added to the ocean and reflection section as well as light bright spots to reflect the sparkling effect of the night.

Buildings are gradually darkened to eventually take on the dark grey colour of the night, retaining some detail but bringing in the nighttime atmosphere.

### Technical implementation explanation
Colour transitions are implemented using the lerpColor() function, which smoothly transitions from the initial colour to the ending colour of the night.

The move() method controls the colour gradient of each part, and the drawRect() method adds a slight offset and rotation to simulate the texture of a paintbrush.

The time is controlled by the progress variable, limiting the animation to 20 seconds.

### Inspiration
This project is inspired by Monet's pursuit of the beauty of dusk. We hope to show the moving transition effect from dusk to night through animation, so that the audience can feel the process of dusk gradually receding and night deepening.
