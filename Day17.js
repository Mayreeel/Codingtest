function solution(n) {
  var answer = [];
  let i = 2;
  while (n != 1) {
    n % i == 0 ? ((n /= i), answer.push(i)) : (i += 1);
  }
  //   answer = new Set(answer);
  //   return [...answer];
  return [...new Set(answer)];
}
