🎯 Angry Birds with Tail
A physics-based projectile game inspired by Daniel Shiffman's Coding Train series, built using the Matter.js physics engine. This enhanced version adds:

🐦 A bird with a visible tail

🌳 A tree as an obstacle

🍺 Stacked beer glasses (modeled with box.js)

🎯 Aim-and-shoot gameplay using a slingshot mechanism

The goal is to launch the bird over or around the tree and knock over the stacked glasses with carefully chosen angle and force.

![image](https://github.com/ReinhardLenz/angry-birds-with-tail/assets/71219487/0a92b505-ec53-4b8c-9e2c-7e6240b830aa)


🚀 Gameplay Overview
Click and drag the bird to tighten the slingshot.

Release to launch the bird.

The bird disconnects from the slingshot upon release.

Avoid the tree and try to hit the beer glasses.

This project is a practice/rehearsal in using Matter.js for physics-based interactions and object modeling.

🧩 File Breakdown
File	Description
bird.js	Defines the bird object, including its physics body and trailing "tail".

box.js	Represents the stacked beer glasses (target objects) using rectangular bodies.

tree.js	Adds a static obstacle (tree) between slingshot and target.

slingshot.js	Creates the constraint that attaches the bird to the sling and handles release.

ground.js	A simple static platform for the scene.

sketch.js	The main script. Initializes engine, world, objects, and handles rendering.

index.html	Loads all modules and the canvas.

🛠 Technologies Used
Matter.js – 2D physics engine for rigid body simulation

p5.js – (Optional) for drawing and interaction, if used

JavaScript – Plain vanilla JS

🌳 Improvements over the Coding Train Original
Added a tree obstacle to make targeting more challenging.

Visual tail for the bird for improved realism and motion tracking.

More complex target objects (beer glasses as boxes).

Slightly improved object structure and modularity.

📁 How to Run
Clone the repo:

bash
Copier
Modifier
git clone https://github.com/ReinhardLenz/angry-birds-with-tail.git
Open index.html in a browser (no server required).

Play!

🧠 Credits
Based on the excellent tutorials by Daniel Shiffman (Coding Train)

Physics engine: Matter.js

Improvements and visuals by Reinhard Lenz
