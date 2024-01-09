import sys
import sympy

rawData = open(sys.argv[1]).read().strip()

LEAST = 200000000000000 if sys.argv[1] == '24i.txt' else 7
MOST = 400000000000000 if sys.argv[1] == '24i.txt' else 27

hailstones = [[[int(num) for num in xyz.split(',')] for xyz in line.split(' @ ')] for line in rawData.split('\n')]

ans = []

eqs = []

x, y, z, v, w, u = sympy.symbols('x, y, z, v, w, u')

for i, [[x1, y1, z1], [v1, w1, u1]] in enumerate(hailstones):
  eqs.append((x - x1) * (w - w1) - (y - y1) * (v - v1))
  eqs.append((x - x1) * (u - u1) - (z - z1) * (v - v1))

  if i < 2:
    continue

  ans = [solv for solv in sympy.solve(eqs) if all(x % 1 == 0 for x in solv.values())]

  if len(ans) == 1:
    break

print(ans[0][x] + ans[0][y] + ans[0][z])
