const codeBlock = `
import sys
import pygame
import random


class Backtracking:

    def __init__(self):
        self.height = 30
        self.width = 30

    def odd(self, height, width):
        if height % 2 == 0:
            height += r
        if width % 2 == 0:
            width += 1
        return height, width

    def maze_grid(self, height, width):
        maze = []
        for _ in range(height):
            row = []
            for __ in range(width):
                row.append(1)
            maze.append(row)
        return maze

    def movements(self, start_pos):
        row = start_pos[0]
        col = start_pos[1]
        up = (row - 2, col)
        up_wall = (row - 1, col)

        down = (row + 2, col)
        down_wall = (row + 1, col)

        left = (row, col - 2)
        left_wall = (row, col - 1)

        right = (row, col + 2)
        right_wall = (row, col + 1)

        self.directions = [
            (up, up_wall),
            (down, down_wall),
            (left, left_wall),
            (right, right_wall),
        ]
        random.shuffle(self.directions)

        return self.directions

    def carve_passage(self, row, col, maze):
        maze[row][col] = 0
        shuffled_directions = self.movements((row, col))
        for neighbor, wall in shuffled_directions:
            neighbor_row, neighbor_col = neighbor
            wall_row, wall_col = wall
            if (
                neighbor_row < 0
                or neighbor_row >= self.height
                or neighbor_col < 0
                or neighbor_col >= self.width
            ):
                continue
            if maze[neighbor_row][neighbor_col] == 1:
                maze[wall_row][wall_col] = 0
                self.carve_passage(neighbor_row, neighbor_col, maze)

    def print_maze(self, maze):
        for row in maze:
            print(" ".join(str(cell) for cell in row))

    def generate_maze(self):
        self.height, self.width = self.odd(self.height, self.width)
        maze = self.maze_grid(self.height, self.width)
        start_pos = (1, 1)
        self.carve_passage(start_pos[0], start_pos[1], maze)
        return maze


bt = Backtracking()
maze_data = bt.generate_maze()


pygame.init()
clock = pygame.time.Clock()


SCREEN_UPDATE = pygame.USEREVENT
cell_size = 20
screen = pygame.display.set_mode((bt.width * cell_size, bt.height * cell_size))
pygame.time.set_timer(SCREEN_UPDATE, 50)


while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    screen.fill(pygame.Color(36, 36, 36))
    for row_idx, row in enumerate(maze_data):
        for col_idx, cell in enumerate(row):
            color = (255, 255, 255) if cell == 1 else (36, 36, 36)
            rect = pygame.Rect(
                col_idx * cell_size, row_idx * cell_size, cell_size, cell_size
            )
            pygame.draw.rect(screen, color, rect)
    pygame.display.flip()
    clock.tick(60)
`;
export default codeBlock;
