// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000
// 입출력 예
// array	result
// [1, 2, 3, 3, 3, 4]	3
// [1, 1, 2, 2]	-1
// [1]	1
// 입출력 예 설명
// 입출력 예 #1

// [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.
// 입출력 예 #2

// [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.
// 입출력 예 #3

// [1]에는 1만 있으므로 최빈값은 1입니다.
// 나의 풀이
function solution(array) {
  let value = [];
  let arr = array;
  while (arr != 0) {
    value.push(arr.filter((element) => arr[0] == element));
    arr = arr.filter(
      (x) => !arr.filter((element) => arr[0] === element).includes(x)
    );
  }
  value.sort((a, b) => b.length - a.length);
  return value.length === 1
    ? value[0][0]
    : value[0].length == value[1].length
    ? -1
    : value[0][0];
}
// 다른 사람 풀이
// function solution(array) {
//     let m = new Map();
//     for (let n of array) m.set(n, (m.get(n) || 0)+1);
//     m = [...m].sort((a,b)=>b[1]-a[1]);
//     return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }

// const solution = (array) => {
//     const counter = array.reduce((acc, cur) => ({
//         ...acc,
//         [cur]: (acc[cur] || 0) + 1
//     }), {})

//     const items = Object.keys(counter).map((key) => [
//         Number(key), counter[key]
//     ]).sort((a, b) => b[1] - a[1])

//     if (items[0][1] === items?.[1]?.[1]) {
//         return -1
//     }

//     return items[0][0];
// }

// 소숫점 버릴땐 parseInt 말고 Math.floor 쓰기!!
