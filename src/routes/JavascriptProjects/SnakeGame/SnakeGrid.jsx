import React, { useState, useEffect, useRef } from "react";

const GRID_SIZE = 20; // 20x20 grid
const INITIAL_SNAKE_LENGTH = 3;

export default function SnakeGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [snake, setSnake] = useState([]);
  const [fruit, setFruit] = useState(null);
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  const gameInterval = useRef(null);

  // Initialize the game
  const startGame = () => {
    if (!userName.trim()) return; // Don't start if name is empty
    setGameStarted(true);
    setSnake(createInitialSnake());
    setFruit(generateRandomFruit());
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
  };

  // Create the initial snake of 3 blocks
  const createInitialSnake = () => {
    const initialSnake = [];
    for (let i = 0; i < INITIAL_SNAKE_LENGTH; i++) {
      initialSnake.push({ x: GRID_SIZE / 2, y: GRID_SIZE / 2 + i });
    }
    return initialSnake;
  };

  // Generate a random fruit position
  const generateRandomFruit = () => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    return { x, y };
  };

  // Handle keypresses for snake movement
  const handleKeyDown = (e) => {
    if (gameOver) return;

    if (e.key === "ArrowUp" && direction !== "DOWN") {
      setDirection("UP");
    } else if (e.key === "ArrowDown" && direction !== "UP") {
      setDirection("DOWN");
    } else if (e.key === "ArrowLeft" && direction !== "RIGHT") {
      setDirection("LEFT");
    } else if (e.key === "ArrowRight" && direction !== "LEFT") {
      setDirection("RIGHT");
    }
  };

  // Move the snake based on the current direction
  const moveSnake = () => {
    setSnake((prevSnake) => {
      const head = { ...prevSnake[0] };
      if (direction === "UP") head.x -= 1;
      if (direction === "DOWN") head.x += 1;
      if (direction === "LEFT") head.y -= 1;
      if (direction === "RIGHT") head.y += 1;

      const newSnake = [head, ...prevSnake.slice(0, prevSnake.length - 1)];

      // Check for collisions
      if (checkCollision(newSnake)) {
        setGameOver(true);
        return prevSnake; // Return the snake as is if game over
      }

      // Check for fruit collision and grow snake
      if (head.x === fruit.x && head.y === fruit.y) {
        const newFruit = generateRandomFruit();
        setFruit(newFruit);
        setScore((prevScore) => prevScore + 1);
        return [head, ...newSnake]; // Add new head to snake
      }

      return newSnake;
    });
  };

  // Check if the snake collides with itself or walls
  const checkCollision = (snake) => {
    const head = snake[0];

    // Check if the snake hits the wall
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE
    ) {
      return true;
    }

    // Check if the snake hits its own body
    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return true;
      }
    }

    return false;
  };

  // Start the game loop
  useEffect(() => {
    if (gameOver || !gameStarted) return;

    gameInterval.current = setInterval(() => {
      moveSnake();
    }, 100); // Adjust the speed here

    return () => {
      clearInterval(gameInterval.current);
    };
  }, [snake, direction, gameStarted, gameOver]);

  // Handle name submission and game start
  const handleNameSubmit = () => {
    if (userName.trim()) {
      startGame();
    }
  };

  // Leaderboard
  const updateLeaderboard = () => {
    if (gameOver) {
      const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      leaderboard.push({ name: userName, score });
      leaderboard.sort((a, b) => b.score - a.score);
      localStorage.setItem(
        "leaderboard",
        JSON.stringify(leaderboard.slice(0, 5)),
      );
    }
  };

  // Render the leaderboard
  const renderLeaderboard = () => {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    return (
      <div className="absolute top-4 left-4 p-4 bg-gray-800 text-white rounded-lg">
        <h2 className="text-xl font-bold">Leaderboard</h2>
        <ul>
          {leaderboard.map((entry, index) => (
            <li key={index}>
              {index + 1}. {entry.name}: {entry.score}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Game Over screen
  const renderGameOver = () => (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
      Game Over! Score: {score}
    </div>
  );

  // Name input screen
  const renderNameInput = () => (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-6 rounded-lg">
      <h2 className="text-xl font-bold">Enter Your Name</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="mt-4 p-2 bg-gray-700 text-white rounded-lg"
      />
      <button
        onClick={handleNameSubmit}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Start Game
      </button>
    </div>
  );

  // If game is not started, show name input screen
  if (!gameStarted) {
    return renderNameInput();
  }

  // Render game area with snake and fruit
  return (
    <div className="relative">
      {renderLeaderboard()}

      <div className="grid grid-cols-[repeat(20,1fr)] gap-0.5 bg-gray-900 p-2">
        {Array.from({ length: GRID_SIZE }).map((_, rowIndex) =>
          Array.from({ length: GRID_SIZE }).map((_, colIndex) => {
            const isSnakeCell = snake.some(
              (segment) => segment.x === rowIndex && segment.y === colIndex,
            );
            const isFruitCell = fruit.x === rowIndex && fruit.y === colIndex;

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-6 h-6 border border-gray-700 
                  ${isSnakeCell ? "bg-green-500" : ""} 
                  ${isFruitCell ? "bg-red-500" : ""}`}
              />
            );
          }),
        )}
      </div>

      {gameOver && renderGameOver()}
    </div>
  );
}
