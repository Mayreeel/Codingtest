function solution(emergency) {
  var answer = [];
  let arr = [...emergency].sort((a, b) => b - a);
  for (let i = 0; i < emergency.length; i++) {
    answer.push(arr.indexOf(emergency[i]) + 1);
  }
  return answer;
}
