import React, { useEffect, useRef, useState } from 'react';

const Grid = ({ rows, columns, length, onSolve }) => {
  const canvasRef = useRef(null);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const generatedGrid = generateMaze(rows, columns);
    setGrid(generatedGrid);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawGrid = () => {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          ctx.fillStyle = generatedGrid[i][j] === 1 ? 'black' : 'white';
          ctx.fillRect(j * length, i * length, length, length);
          ctx.strokeRect(j * length, i * length, length, length);
        }
      }
    };

    drawGrid();
    onSolve(generatedGrid, ctx);
  }, [rows, columns, length, onSolve]);

  return <canvas ref={canvasRef} width={columns * length} height={rows * length} />;
};
const generateMaze = (rows, columns) => {
  const grid = Array.from({ length: rows }, () => Array(columns).fill(1));
  const stack = [];
  const startX = Math.floor(columns / 2);
  const startY = 0;
  grid[startY][startX] = 0;
  stack.push([startY, startX]);

  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0], // right, down, left, up
  ];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  while (stack.length > 0) {
    const [x, y] = stack.pop();
    shuffle(directions);

    for (const [dx, dy] of directions) {
      const nx = x + 2 * dx;
      const ny = y + 2 * dy;

      if (nx >= 0 && nx < rows && ny >= 0 && ny < columns && grid[nx][ny] === 1) {
        grid[x + dx][y + dy] = 0;
        grid[nx][ny] = 0;
        stack.push([nx, ny]);
      }
    }
  }

  // Ensure the ending point is clear
  grid[rows - 1][startX] = 0;
  return grid;
};

export default Grid;
