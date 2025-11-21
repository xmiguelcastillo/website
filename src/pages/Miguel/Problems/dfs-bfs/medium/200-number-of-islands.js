export default {
  code: `
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        row = len(grid)
        col = len(grid[0])
        visited = set()
        count = 0
        def bfs(r,c):
            q = deque()
            q.append((r,c))
            visited.add((r,c))
            while q:
                rq, cq = q.popleft()
                directions = [(1,0),(-1,0),(0,1),(0,-1)]
                for dx, dy in directions:
                    rqx = rq + dx
                    cqy = cq + dy
                    if 0 <= rqx < row and 0 <= cqy < col and (rqx,cqy) not in visited and grid[rqx][cqy] == "1":
                        visited.add((rqx,cqy))
                        q.append((rqx,cqy))
        for r in range(row):
            for c in range(col):
                if (r,c) not in visited and grid[r][c] == "1":
                    bfs(r,c)
                    count += 1 
        return count 
`,
};
