import React, { useState, useEffect } from 'react';
import Grid from './Grid';

const LightningAnimation = () => {
  const rows = 45;
  const columns = 42;
  const length = 13;
  const padBox = 0.51;
  const fadeTime = 15;

  const [audio, setAudio] = useState({ rain: null, thunder: null });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const rain = new Audio('/rain.wav');
    const thunder = new Audio('/thunder.wav');
    setAudio({ rain, thunder });
  }, []);

  const solveGrid = async (grid, ctx) => {
    const directions = [
      [0, 1], [1, 0], [0, -1], [-1, 0], // right, down, left, up
    ];

    const isValid = (x, y) => {
      return x >= 0 && x < rows && y >= 0 && y < columns && grid[x][y] === 0;
    };

    const bfs = async (start_y, start_x) => {
      const visited = Array.from({ length: rows }, () => Array(columns).fill(false));
      const queue = [[start_y, start_x, null]];
      visited[start_y][start_x] = true;

      let path = [];
      let found = false;

      while (queue.length > 0 && !found) {
        const [x, y, parent] = queue.shift();
        ctx.fillStyle = 'blue';
        ctx.fillRect(
          y * length + padBox,
          x * length + padBox,
          length - padBox * 2,
          length - padBox * 2
        );
        ctx.stroke();
        await new Promise(resolve => setTimeout(resolve, 20));

        for (const [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;
          if (isValid(nx, ny) && !visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny, [x, y]]);
            if (nx === rows - 1) {
              found = true;
              let node = queue.find(q => q[0] === nx && q[1] === ny);
              while (node) {
                path.push(node);
                node = node[2];
              }
              break;
            }
          }
        }
      }

      return path.reverse();
    };


    const start_x = Math.floor(columns / 2);
    const path = await bfs(0, start_x);

    if (path.length > 0) {
      for (const [px, py] of path) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(
          py * length + padBox,
          px * length + padBox,
          length - padBox * 2,
          length - padBox * 2
        );
        ctx.stroke();
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      setTimeout(() => {
        audio.rain.pause();
        audio.thunder.play();
        let cc = 255;
        const fadeInterval = setInterval(() => {
          if (cc < 0) {
            clearInterval(fadeInterval);
            return;
          }
          let color = cc.toString(16).padStart(2, '0');
          color = `#${color}${color}00`;
          path.forEach(([px, py]) => {
            ctx.fillStyle = color;
            ctx.fillRect(
              py * length + padBox,
              px * length + padBox,
              length - padBox * 2,
              length - padBox * 2
            );
            ctx.stroke();
          });
          cc -= fadeTime;
        }, 50);
      }, 500);
    }
  };

  const startAnimation = () => {
    setIsAnimating(true);
  };

  return (
    <div className="lightning-container">
      {!isAnimating && <button onClick={startAnimation}>Start Lightning Animation</button>}
      {isAnimating && <Grid rows={rows} columns={columns} length={length} onSolve={solveGrid} />}
    </div>
  );
};

export default LightningAnimation;
