# Game of Life
The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

[Demo](https://elevenbeans.github.io/Game_of_Life/)

# Rules

给出一个m*n的细胞矩阵，每个细胞都有一个初始状态：生存（1）或死亡（0）。每个细胞的变化都与它周围8个细胞有关，规则如下：

+ 当前细胞为存活状态时，当周围存活细胞不到2个时， 该细胞变成死亡状态。（模拟生命数量稀少）

+ 当前细胞为存活状态时，当周围有2个或3个存活的细胞时， 该细胞保持原样。

+ 当前细胞为存活状态时，当周围有3个以上的存活细胞时，该细胞变成死亡状态。（模拟生命数量过多）

+ 当前细胞为死亡状态时，当周围恰好有3个存活细胞时，该细胞变成存活状态。 （模拟繁殖）
