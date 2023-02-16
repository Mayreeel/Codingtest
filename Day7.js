// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000
// 입출력 예
// numer1	denom1	numer2	denom2	result
// 1	2	3	4	[5, 4]
// 9	2	1	3	[29, 6]
// 입출력 예 설명
// 입출력 예 #1

// 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
// 입출력 예 #2

// 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
//나의 풀이
function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let numerDiv = [];
  let denom = denom1 * denom2;
  let denomDiv = [];
  for (let i = 2; numer !== 1; i++) {
    while (numer / i === Math.floor(numer / i)) {
      numer /= i;
      numerDiv.push(i);
    }
  }
  for (let i = 2; denom !== 1; i++) {
    while (denom / i === Math.floor(denom / i)) {
      denom /= i;
      denomDiv.push(i);
    }
  }
  for (let i = 0; i < numerDiv.length; i++) {
    for (let j = 0; j < denomDiv.length; j++) {
      if (numerDiv[i] === denomDiv[j]) {
        numerDiv.splice(i, 1);
        denomDiv.splice(j, 1);
        i -= 1;
        j -= 1;
      }
    }
  }
  return numerDiv.reduce((x, y) => (x *= y), 1) ==
    denomDiv.reduce((x, y) => (x *= y), 1)
    ? [1, 1]
    : [
        numerDiv.reduce((x, y) => (x *= y), 1),
        denomDiv.reduce((x, y) => (x *= y), 1),
      ];
}
// 다른 사람 풀이
// function fnGCD(a, b){
//     return (a%b)? fnGCD(b, a%b) : b;
// }

// function solution(denum1, num1, denum2, num2) {
//     let denum = denum1*num2 + denum2*num1;
//     let num = num1 * num2;
//     let gcd = fnGCD(denum, num); //최대공약수

//     return [denum/gcd, num/gcd];
// }
