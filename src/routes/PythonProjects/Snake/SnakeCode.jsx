import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/brewer.css";

function SnakeCode() {
  const [activeTab, setActiveTab] = useState(0);

  const codeSnippets = [
    {
      label: "Python",
      code: `
import random
import sys
from mimetypes import init
from random import choice, randint

import pygame as pygame
from pygame.math import Vector2


class SNAKE:
    def __init__(self):
        rand_start_x = randint(2, 20)
        rand_start_y = randint(3, 20)
        first = Vector2(rand_start_x, rand_start_y)
        second = first + Vector2(1, 0)
        third = second + Vector2(1, 0)

        self.body = [first, second, third]

        self.score = 0
        self.direction = Vector2(0, -1)

    def draw_snake(self):
        for block in self.body:
            # head = self.body[0][0]
            # tail = self.body[-1][0]
            x_pos = int(block.x * cell_size)
            y_pos = int(block.y * cell_size)
            block_rect = pygame.Rect(x_pos, y_pos, cell_size, cell_size)
            pygame.draw.rect(screen, (0, 36, 255), block_rect)

    def move_snake(self):
        body_copy = self.body[:-1]
        body_copy.insert(0, body_copy[0] + self.direction)
        self.body = body_copy[:]

    def get_head_rect(self):
        head = self.body[0]
        return pygame.Rect(
            int(head.x * cell_size),
            int(head.y * cell_size),
            cell_size,
            cell_size,
        )

    def block_rect(self):
        return [
            pygame.Rect(
                int(block.x * cell_size),
                int(block.y * cell_size),
                cell_size,
                cell_size,
            )
            for block in self.body
        ]

    def move_snake_grow(self):
        if self.get_head_rect().colliderect(fruit.get_fruit_rect()):
            self.score += 1
            self.body.append(self.body[-1])  # Add a new segment at the end
            fruit.reset_fruit()
            print(self.score)


class FRUIT:
    def __init__(self):
        # create x and y
        # and a square/fruit
        self.x = random.randint(0, cell_number - 1)
        self.y = random.randint(0, cell_number - 1)
        # self.pos = Vector2(x, y,width,height)
        self.pos = Vector2(self.x, self.y)
        # we know how big the pixel is 40,20

    def draw_fruit(self):
        # create rectangle
        fruit_rect = pygame.Rect(
            int(self.pos.x * cell_size),
            int(self.pos.y * cell_size),
            cell_size,
            cell_number,
        )
        # draw
        # pygame.draw.rect(surface, color, rectangle)
        pygame.draw.rect(screen, (255, 74, 192), fruit_rect)

    def get_fruit_rect(self):
        return pygame.Rect(
            int(self.pos.x * cell_size),
            int(self.pos.y * cell_size),
            cell_size,
            cell_size,
        )

    def reset_fruit(self):
        while any(Vector2(self.x, self.y) == block for block in snake.body):
            self.x = random.randint(0, cell_number - 1)
            self.y = random.randint(0, cell_number - 1)
            self.pos = Vector2(self.x, self.y)


class EVENTS:
    def __init__(self) -> None:
        pass

    def check_events(self):
        global snake
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if event.type == SCREEN_UPDATE:
                snake.move_snake()
                snake.move_snake_grow()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_RIGHT and snake.direction != Vector2(-1, 0):
                    snake.direction = Vector2(1, 0)
                if event.key == pygame.K_LEFT and snake.direction != Vector2(1, 0):
                    snake.direction = Vector2(-1, 0)
                if event.key == pygame.K_DOWN and snake.direction != Vector2(0, -1):
                    snake.direction = Vector2(0, 1)
                if event.key == pygame.K_UP and snake.direction != Vector2(0, 1):
                    snake.direction = Vector2(0, -1)


class COLLISIONS:
    def __init__(self) -> None:
        pass

    def check_border_collision(self, snake_head_rect):
        # Define border rectangles
        top_border = pygame.Rect(
            -cell_size, -cell_size, screen_width + 2 * cell_size, cell_size
        )
        bottom_border = pygame.Rect(
            -cell_size, screen_height, screen_width + 2 * cell_size, cell_size
        )
        left_border = pygame.Rect(
            -cell_size, -cell_size, cell_size, screen_height + 2 * cell_size
        )
        right_border = pygame.Rect(
            screen_width, -cell_size, cell_size, screen_height + 2 * cell_size
        )

        # Check collision with any border
        if (
            snake_head_rect.colliderect(top_border)
            or snake_head_rect.colliderect(bottom_border)
            or snake_head_rect.colliderect(left_border)
            or snake_head_rect.colliderect(right_border)
        ):
            return True

        return False


# class CRT:
#     def __init__(self):
#         self.tv = pygame.image.load("tv.png").convert_alpha()
#         self.tv = pygame.transform.scale(
#             self.tv, (screen_width, screen_height)
#         )
#
#     def create_crt_lines(self):
#         line_height = 3
#         line_amount = int(screen_height / line_height)
#         for line in range(line_amount):
#             y_pos = line * line_height
#             pygame.draw.line(
#                 self.tv, "black", (0, y_pos), (screen_width, y_pos), 1
#             )
#
#     def draw(self):
#         self.tv.set_alpha(randint(75, 90))
#         self.create_crt_lines()
#         screen.blit(self.tv, (0, 0))


pygame.init()
pygame.mouse.set_visible(False)

cell_size = 40
cell_number = 20
screen_width = cell_size * cell_number
screen_height = cell_size * cell_number
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Snake Game")
SCREEN_UPDATE = pygame.USEREVENT
pygame.time.set_timer(SCREEN_UPDATE, 50)
clock = pygame.time.Clock()

snake = SNAKE()
fruit = FRUIT()
events = EVENTS()
collision = COLLISIONS()
# crt = CRT()


while True:
    events.check_events()

    # background color
    screen.fill(pygame.Color(0, 0, 0))
    # crt.draw()
    fruit.draw_fruit()

    if snake.get_head_rect().colliderect(fruit.get_fruit_rect()):
        fruit.reset_fruit()
    if any(
        snake.get_head_rect().colliderect(block_rect)
        for block_rect in snake.block_rect()[1:]
    ):
        print("Game Over! Snake collided with itself.")
        pygame.quit()
        sys.exit()

    # Check for collision with screen borders
    if collision.check_border_collision(snake.get_head_rect()):
        print("Game Over! Snake collided with the border.")
        pygame.quit()
        sys.exit()
    snake.draw_snake()
    pygame.display.update()
    clock.tick(60)


pygame.quit()
quit()




      `,
    },
  ];

  useEffect(() => {
    hljs.highlightAll(); // Apply syntax highlighting
  }, [activeTab]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="mt-6 lg:w-[600px] sm:w-[400px]">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md ${activeTab === index
                ? "bg-blue-950 border-[#111111] border-2 text-white"
                : "bg-gray-200 text-black"
              }`}
          >
            {snippet.label}
          </button>
        ))}
      </div>
      {/* Code Block */}
      <div className="relative bg-[#111111] text-white rounded-s4 p-4">
        <div
          className="overflow-auto max-h-[1000px] text-sm leading-5"
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          <pre>
            <code
              className={`language-${codeSnippets[
                activeTab
              ].label.toLowerCase()}`}
            >
              {codeSnippets[activeTab].code.trim()}
            </code>
          </pre>
        </div>
        {/* Copy Button */}
        <button
          onClick={() => copyToClipboard(codeSnippets[activeTab].code)}
          className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default SnakeCode;
