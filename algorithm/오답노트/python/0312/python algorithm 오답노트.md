# python algorithm 오답노트

## 파이프 옮기기1

1. 코드

```python
import time, sys
start_time = time.time()
sys.stdin = open('파이프.txt')


def DFS(r, c, d):
    global N, cnt
    stack.append([r, c, d])
    while stack:
        row, col, direction = stack.pop()
        for i in range(3):
            nr = row + dr[i]
            nc = col + dc[i]
            if not table[nr][nc]:
                if direction != 2 and i != 2 and direction != i:
                    continue
                if i == 2 and conner(nr, nc):
                    continue
                if nr == N and nc == N:
                    cnt += 1
                    break
                stack.append([nr, nc, i])


def conner(r, c):
    if table[r-1][c] or table[r][c-1]:
        return True
    return False


# 우 하 우하
dr = [0, 1, 1]
dc = [1, 0, 1]
N = int(input())
cnt = 0
stack = []
table = [[1] * (N+2)]
table += [[1] + list(map(int, input().split())) + [1] for _ in range(N)]
table += [[1] * (N+2)]
DFS(1, 2, 0)
print(cnt)
```

2. 틀린부분

 ```python
# line 19
if nr == N and nc == N:
                    cnt += 1
                    break
# 생각: nr과 nc과 도착지점의 index라면 도착한것으로 보고 카운트를 해줬다. 하지만 만약 도착지점이 막혀있다면? 이 코드는 해당 케이스를 고려하지 않고 카운트를 해준다. 따라서 도착점도 길이 있는지 확인을 해줬어야 한다.
 ```

3. 수정

   1. 수정 코드1

   ```python
   import time, sys
   start_time = time.time()
   sys.stdin = open('파이프.txt')
   
   
   def DFS(r, c, d):
       global N, cnt
       stack.append([r, c, d])
       while stack:
           row, col, direction = stack.pop()
           for i in range(3):
               nr = row + dr[i]
               nc = col + dc[i]
               if not table[nr][nc]:
                   if direction != 2 and i != 2 and direction != i:
                       continue
                   if i == 2 and conner(nr, nc):
                       continue
                   if nr == N and nc == N and not table[nr][nc]:
                       cnt += 1
                       break
                   stack.append([nr, nc, i])
   
   
   def conner(r, c):
       if table[r-1][c] or table[r][c-1]:
           return True
       return False
   
   
   # 우 하 우하
   dr = [0, 1, 1]
   dc = [1, 0, 1]
   N = int(input())
   cnt = 0
   stack = []
   table = [[1] * (N+2)]
   table += [[1] + list(map(int, input().split())) + [1] for _ in range(N)]
   table += [[1] * (N+2)]
   DFS(1, 2, 0)
   print(cnt)
   print("--- %s seconds ---" %(time.time() - start_time))
   
   ```

   
