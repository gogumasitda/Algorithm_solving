# python algorithm 오답노트

## 섬의 개수와 높이 구하기

1. 코드

```python
import sys
sys.stdin = open('p2.txt')

def DFS(start):
    global max_height
    stack.append(start)
    while stack:
        row, col = stack.pop()
        height = raw_data[row][col]
        raw_data[row][col] = 0
        if max_height < height:
            max_height = height
        for i in range(4):
            row += dr[i]
            col += dc[i]
            if raw_data[row][col]:
                stack.append([row, col])
            else:
                row -= dr[i]
                col -= dc[i]


dr = [1, -1, 0, 0]
dc = [0, 0, 1, -1]

T = int(input())
for tc in range(1, T+1):
    N = int(input())
    raw_data = [[0] * (N+2)] + [[0] + list(map(int, input().split())) + [0] for _ in range(N)] + [[0] * (N+2)]
    stack =[]
    cnt = 0
    max_height = 0
    for i in range(1, N+1):
        for j in range(1, N+1):
            if raw_data[i][j]:
                DFS([i, j])
                cnt += 1
    print('#{} {} {}'.format(tc, cnt, max_height))
```

2. 틀린부분

 ```python
        for i in range(4):
            row += dr[i]
            col += dc[i]
            if raw_data[row][col]:
                stack.append([row, col])
            else:
                row -= dr[i]
                col -= dc[i]
                # 델타 검색에서 한번 더 해준 값을 다시 돌아가는 내용이
                # 지금 else로 빠져있음. 
                # 델타 검색에서 하나가 일단 맞으면 제대로 못 들어감.
 ```

3. 수정

   1. 수정 코드1

   ```python
   import sys
   sys.stdin = open('p2.txt')
   
   def DFS(start):
       global max_height
       stack.append(start)
       while stack:
           row, col = stack.pop()
           height = raw_data[row][col]
           raw_data[row][col] = 0
           if max_height < height:
               max_height = height
           for i in range(4):
               row += dr[i]
               col += dc[i]
               if raw_data[row][col]:
                   stack.append([row, col])
               row -= dr[i]
               col -= dc[i]
               # 더 해준 값을 이렇게 다시 빼줘야 한다.
   
   
   dr = [1, -1, 0, 0]
   dc = [0, 0, 1, -1]
   
   T = int(input())
   for tc in range(1, T+1):
       N = int(input())
       raw_data = [[0] * (N+2)] + [[0] + list(map(int, input().split())) + [0] for _ in range(N)] + [[0] * (N+2)]
       stack =[]
       cnt = 0
       max_height = 0
       for i in range(1, N+1):
           for j in range(1, N+1):
               if raw_data[i][j]:
                   DFS([i, j])
                   cnt += 1
       print('#{} {} {}'.format(tc, cnt, max_height))
   ```

    	2. 수정코드2

   ```python
   import sys
   sys.stdin = open('p2.txt')
   
   def DFS(start):
       global max_height
       stack.append(start)
       while stack:
           row, col = stack.pop()
           height = raw_data[row][col]
           raw_data[row][col] = 0
           if max_height < height:
               max_height = height
           for i in range(4):
               nr = row + dr[i]
               nc = col + dc[i]
               if raw_data[nr][nc]:
                   stack.append([nr, nc])
               # 아니면 nr, nc로 잡아주면 됨.
   
   
   dr = [1, -1, 0, 0]
   dc = [0, 0, 1, -1]
   
   T = int(input())
   for tc in range(1, T+1):
       N = int(input())
       raw_data = [[0] * (N+2)] + [[0] + list(map(int, input().split())) + [0] for _ in range(N)] + [[0] * (N+2)]
       stack =[]
       cnt = 0
       max_height = 0
       for i in range(1, N+1):
           for j in range(1, N+1):
               if raw_data[i][j]:
                   DFS([i, j])
                   cnt += 1
       print('#{} {} {}'.format(tc, cnt, max_height))
   
   ```

   

