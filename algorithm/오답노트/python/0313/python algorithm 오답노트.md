# python algorithm 오답노트

## 등산로 조성

1. 코드

```python
# swea 모의 테스트 문제

# 문제 정리
# 1. 등산로는 가장 높은 봉우리에서 시작
# 2. 등산로는 높은 지형에서 낮은 지형으로 가로 또느 세로 연결
# 2. 1. 높이가 같은 곳 대각선 연결 불가
# 3. 긴 등사로를 만들기 위해 딱 한 곳을 정해 최대 K 만큼 지형 깎기 가능.
# 4. 가장 긴 등산로 길이 출력

import sys
sys.stdin = open('등산로.txt')


def DFS(row, col, flag):
    global N, K, max_length
    if max_length < visited[row][col]:
        max_length = visited[row][col]
    for i in range(4):
        nr = row + dr[i]
        nc = col + dc[i]
        if nr < 0 or nr == N or nc < 0 or nc == N:
            continue
        if visited[nr][nc]:
            continue
        if raw_data[nr][nc] < raw_data[row][col]:
            visited[nr][nc] = visited[row][col] + 1
            DFS(nr, nc, flag)
            visited[nr][nc] = 0
        else:
            if flag or raw_data[nr][nc] - K >= raw_data[row][col]:
                continue
            flag = 1
            temp = raw_data[nr][nc]
            raw_data[nr][nc] = raw_data[row][col] - 1
            visited[nr][nc] = visited[row][col] + 1
            DFS(nr, nc, flag)
            visited[nr][nc] = 0
            raw_data[nr][nc] = temp
            flag = 0


dr = [0, 1, 0, -1]
dc = [1, 0, -1, 0]

T = int(input())
for tc in range(1, T+1):
    N, K = map(int, input().split())
    raw_data = [list(map(int, input().split())) for _ in range(N)]
    visited = [[0] * N for _ in range(N)]
    max_height = 0
    max_length = 0
    for i in range(N):
        max_height = max(raw_data[i] + [max_height])
    # print(max_height)
    for i in range(N):
        for j in range(N):
            if raw_data[i][j] == max_height:
                flag = 0
                visited[i][j] = 1
                DFS(i, j, flag)
                visited[i][j] = 0
    print('#{} {}'.format(tc, max_length))
```

2. 틀린부분

 ```python
def DFS(row, col, flag):
    global N, K, max_length
    cnt = 0
    for i in range(4):
        nr = row + dr[i]
        nc = col + dc[i]
        if nr < 0 or nr == N or nc < 0 or nc == N:
            continue
        if visited[nr][nc]:
            continue
        if raw_data[nr][nc] < raw_data[row][col]:
            visited[nr][nc] = visited[row][col] + 1
            DFS(nr, nc, flag)
            visited[nr][nc] = 0
        else:
            if flag or raw_data[nr][nc] - K >= raw_data[row][col]:
                continue
            flag = 1
            temp = raw_data[nr][nc]
            raw_data[nr][nc] = raw_data[row][col] - 1
            visited[nr][nc] = visited[row][col] + 1
            cnt += DFS(nr, nc, flag)
            visited[nr][nc] = 0
            raw_data[nr][nc] = temp
            flag = 0

# 처음에 함수 내에 지역변수 cnt를 이용하여 그 값을 계속 반환해주는 방식으로 거리를 구하여고 하였다.
# 하지만 이러한 방법은 한가지 줄기가 아니라 여러 갈래의 cnt가 합산된 값이기 때문에 visited를 이용하여 거리 계산하는 것으로 변경하였다.
 ```

3. 수정

   1. 수정 코드

   ```python
   # swea 모의 테스트 문제
   
   # 문제 정리
   # 1. 등산로는 가장 높은 봉우리에서 시작
   # 2. 등산로는 높은 지형에서 낮은 지형으로 가로 또느 세로 연결
   # 2. 1. 높이가 같은 곳 대각선 연결 불가
   # 3. 긴 등사로를 만들기 위해 딱 한 곳을 정해 최대 K 만큼 지형 깎기 가능.
   # 4. 가장 긴 등산로 길이 출력
   
   import sys
   sys.stdin = open('등산로.txt')
   
   
   def DFS(row, col, flag):
       global N, K, max_length
       if max_length < visited[row][col]:
           max_length = visited[row][col]
       for i in range(4):
           nr = row + dr[i]
           nc = col + dc[i]
           if nr < 0 or nr == N or nc < 0 or nc == N:
               continue
           if visited[nr][nc]:
               continue
           if raw_data[nr][nc] < raw_data[row][col]:
               visited[nr][nc] = visited[row][col] + 1
               DFS(nr, nc, flag)
               visited[nr][nc] = 0
           else:
               if flag or raw_data[nr][nc] - K >= raw_data[row][col]:
                   continue
               flag = 1
               temp = raw_data[nr][nc]
               raw_data[nr][nc] = raw_data[row][col] - 1
               visited[nr][nc] = visited[row][col] + 1
               DFS(nr, nc, flag)
               visited[nr][nc] = 0
               raw_data[nr][nc] = temp
               flag = 0
   
   
   dr = [0, 1, 0, -1]
   dc = [1, 0, -1, 0]
   
   T = int(input())
   for tc in range(1, T+1):
       N, K = map(int, input().split())
       raw_data = [list(map(int, input().split())) for _ in range(N)]
       visited = [[0] * N for _ in range(N)]
       max_height = 0
       max_length = 0
       for i in range(N):
           max_height = max(raw_data[i] + [max_height])
       # print(max_height)
       for i in range(N):
           for j in range(N):
               if raw_data[i][j] == max_height:
                   flag = 0
                   visited[i][j] = 1
                   DFS(i, j, flag)
                   visited[i][j] = 0
       print('#{} {}'.format(tc, max_length))
   ```

   
