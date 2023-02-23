function solution(num_list, n) {
  var answer = [];
  let arr = [];
  let j = 0;
  for (let i = 0; i < parseInt(num_list.length / n); i++) {
    while (j < n + n * i) {
      arr.push(num_list[j]);
      j++;
    }
    answer.push(arr);
    arr = [];
  }
  return answer;
}
