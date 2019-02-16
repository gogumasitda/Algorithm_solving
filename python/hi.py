def isWall(x, y):
    if x<0 or x>99:
        return True
    if y<0 or y>99:
        return True
    return False

import sys
sys.stdin = open("Ladder1.txt")
SIZE = 100
for t in range(10):
    no = int(input())
    data = [[0 for _ in range(SIZE)] for _ in range(SIZE)]
    for r in range(SIZE):
        data[r] = list(map(int, input().split()))

    i = 99
    for j in range(100):
        if data[i][j] == 2:
            row = i
            column = j

    dx = [0, 0, -1]
    dy = [-1, 1, 0]
    di = 0
    while row>0:
        if isWall(row+dx[di], column+dy[di]) == False and data[row+dx[di]][column+dy[di]] == 1:  # 벽이 아니거나 1이면 이동함
            row += dx[di]
            column += dy[di]
            if di == 2:
                di = 0
        else:
            di = (di+1) % 3
    print(column)