import React, { useState, useEffect, useRef } from "react";

export default function Maze() {
  const [width] = useState(20);
  const [height] = useState(20);
  const [start_pos] = useState([1, 1]);
  const [maze, setMaze] = useState([]);
  const [step, setStep] = useState(0);

  function makeOdd(w, h) {
    if (w % 2 === 0) {
      w += 1;
    }
    if (h % 2 === 0) {
      h += 1;
    }
    return { width: w, height: h };
  }

  function maze_grid(w, h) {
    let maze = [];
    for (let _ = 0; _ < w; _++) {
      let row = [];
      for (let __ = 0; __ < h; __++) {
        row.push(1);
      }
      maze.push(row);
    }
    return maze;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function movements(start_pos) {
    let row = start_pos[0];
    let col = start_pos[1];

    let up_wall = [row - 1, col];
    let down_wall = [row + 1, col];
    let right_wall = [row, col + 1];
    let left_wall = [row, col - 1];

    let up = [row - 2, col];
    let down = [row + 2, col];
    let right = [row, col + 2];
    let left = [row, col - 2];

    let directions = [
      [up, up_wall],
      [down, down_wall],
      [right, right_wall],
      [left, left_wall],
    ];

    shuffle(directions);

    return directions;
  }

  function* carve_passage(row, col, maze) {
    maze[row][col] = 0;
    yield maze;
    let suffled_directions = movements([row, col]);
    for (const [neighbor, wall] of suffled_directions) {
      let neighbor_row = neighbor[0];
      let neighbor_col = neighbor[1];
      let wall_row = wall[0];
      let wall_col = wall[1];
      if (
        neighbor_row < 0 ||
        neighbor_row >= height ||
        neighbor_col < 0 ||
        neighbor_col >= width
      ) {
        continue;
      }
      if (maze[neighbor_row][neighbor_col] === 1) {
        maze[wall_row][wall_col] = 0;
        yield maze;
        yield* carve_passage(neighbor_row, neighbor_col, maze);
      }
    }
  }

  function generate_maze(w, h) {
    return maze_grid(w, h);
  }

  const adjusted = makeOdd(width, height);

  const generatorRef = useRef(null);

  useEffect(() => {
    const initialMaze = generate_maze(adjusted.width, adjusted.height);
    const gen = carve_passage(start_pos[0], start_pos[1], initialMaze);
    generatorRef.current = gen;
    setMaze(initialMaze);

    const interval = setInterval(() => {
      const next = generatorRef.current.next();
      if (next.done) {
        clearInterval(interval);
      } else {
        setMaze(JSON.parse(JSON.stringify(next.value)));
        setStep((i) => i + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [adjusted.width, adjusted.height, start_pos]);
  const maxWidth = 400;
  const gapSize = 1;
  const totalGap = (adjusted.width - 1) * gapSize;
  const cellSize = Math.floor((maxWidth - totalGap) / adjusted.width);
  let randomR = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
  let randomG = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
  let randomB = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${adjusted.width}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${adjusted.height}, ${cellSize}px)`,
        gap: `${gapSize}px`,
        width: `${adjusted.width * cellSize + totalGap}px`, // exact 400px
        height: `${adjusted.height * cellSize + totalGap}px`,
        marginTop: 20,
      }}
    >
      {maze.flat().map((cell, i) => {
        const color =
          cell === 1 ? "black" : `rgb(${randomR}, ${randomG}, ${randomB})`;
        return (
          <div
            key={i}
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: color,
              transition: "background-color 0.2s ease",
            }}
          />
        );
      })}
    </div>
  );
}
