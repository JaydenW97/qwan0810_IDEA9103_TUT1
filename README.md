# qwan0810_9103_TUT1

## Time Based Monet Style Animation - Iteration 1

### Project Description
This project attempts to recreate Claude Monet's Sunset on St George's Island. As the member responsible for time-based animation, I chose to show a dynamic transition from dusk to night. Since Monet found dusk the most captivating of his works, I wanted to recreate this gradual process with a time-based gradient.
Iteration 1 version focused on the implementation of a static effect to simulate the colours and layers of the night and to lay the foundation for a subsequent time-transition effect.

### Interaction Description
In the current version, the night effect screen is automatically displayed after loading the page without user interaction.
No time transitions or animation effects have been added in this iteration, and are only used as a basis for the night static effect.

### Main features and implementation
Colour Configuration: Initialise static colours for the night in the Rect class, with each part of the sky, ocean and buildings having a specific colour scheme to approximate the warmth and level of the night time.
Static effects: this version has no animation and is only used to show night effects.

### Realisation details
Sky: a gradual darkening of the evening colour was created with a dark blue tone ( colour(20, 30, 60)).
Ocean and reflections: a static colour of dark blue to black was chosen to mimic the effect of the water.

Architecture: darker grey tones ( colour(40, 40, 40)) were used to provide a reference for the night effect afterwards
