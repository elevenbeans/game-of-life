# Game of Life
The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

[Demo](https://elevenbeans.github.io/game-of-life/)

<img src="./src/images/GOL.png" width="500px"/>

# Rules

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):



+ Any live cell with fewer than two live neighbors dies, as if caused by under-population.
+ Any live cell with two or three live neighbors lives on to the next generation.
+ Any live cell with more than three live neighbors dies, as if by over-population..
+ Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
