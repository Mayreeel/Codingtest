function solution(n) {
  let num = 0;
  let fac = 1;
  while (fac <= n) {
    fac = 1;
    num += 1;
    for (let i = 1; i <= num; i++) {
      fac *= i;
    }
  }
  return num - 1;
}
