const input = `Time:        51     69     98     78
Distance:   377   1171   1224   1505`.split('\n');
const example = `Time:      7  15   30
Distance:  9  40  200`.split('\n');

(async function main () {
  const [time, distance] = input.map(line => Number(line.split(':')[1].trim().split(/\s+/).join('')))
  let ans = 0

  console.log(time, distance);

  for (let j = 1; j < time / 2; j++) {
    if (j * (time - j) > distance) {
      ans++;
    }
  }

  ans = ans * 2 + !(time % 2);
  console.log(time, distance, ans);

  console.log(ans);
})()
