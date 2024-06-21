# Lightning Algorithm

Welcome to the Lightning Algorithm project! This repository showcases an algorithm visualizer that generates and solves mazes using Breadth-First Search (BFS). Below you will find detailed information about the project's technologies, file structure, functionalities, and how to access the project.

## Project Overview
This project visualizes the process of generating solvable mazes and finding the shortest path through them using BFS. The algorithm generates a maze grid, highlights the maze-solving process, and finally animates a lightning strike along the solved path.

## Technologies Used
This project is built using:

React: Utilized for its component-based architecture and efficient rendering.

CSS Modules: For scoped styling of React components.

HTML5 Canvas: Used for drawing the maze grid and animations.

## Project Structure
The project is organized into several components and directories:

src/components: Contains React components like Canvas, Maze, LightningAnimation, etc.

src/assets: Includes static assets such as images and icons.

src/styles: CSS modules for styling components.

public: Public assets and the main HTML file.

## Features

Maze Generation: Automatically generates solvable mazes.

Breadth-First Search (BFS): Finds the shortest path from the top to the bottom of the maze.

Lightning Animation: Strikes along the solved path, accompanied by sound effects.

## Development Setup

### Clone the Repository
```
git clone https://github.com/your-username/lightning-algorithm.git
cd lightning-algorithm
```

### Install Dependencies
```
npm install
```
### Run the Development Server
```
npm start
```

Open http://localhost:3000 in your browser to view the project.

## Project Status
**This project is currently in development, so it might contain bugs or incomplete features. Contributions and feedback are welcome!**


### Iterating Through the Maze Start

![Screenshot 2024-06-20 230210](https://github.com/akshatrajsaxena/lightning-algorithm/assets/119042958/c867f2ab-fcd1-465c-8cf6-6fe5a130e18a)



### Finding the respective path (Highlighted With Yellow)

![Screenshot 2024-06-20 231138](https://github.com/akshatrajsaxena/lightning-algorithm/assets/119042958/e4832cf0-f421-4655-ad21-0e92da52c1e4)

## FAQ

#### Is the maze generation algorithm guaranteed to create solvable mazes?
Yes, the maze generation algorithm ensures that all generated mazes have a solvable path from top to bottom.

#### How does the lightning animation work?
The lightning animation strikes along the path found by BFS, visually highlighting the shortest route through the maze.

#### Is the project responsive?
The project is designed primarily for desktop browsers and may not be fully optimized for mobile devices.

#### How to Contribute?
If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

[MIT LICENSE](https://github.com/akshatrajsaxena/lightning-algorithm/blob/master/LICENSE)

## Contact

If you have any questions or feedback, you can reach out to mailto:akshat22054@iiitd.ac.in

## Acknowledgements

[Numberphile @Matt Henderson](https://www.youtube.com/watch?v=akZ8JJ4gGLs)

[Python BFS Algorithm](https://github.com/Aaryan-R-S/Lightning-BFS)

[React Project Development](https://youtu.be/LDB4uaJ87e0?si=f8MV7LT90Lmy_ziZ)
