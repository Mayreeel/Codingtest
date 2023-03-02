function solution(s) {
  let arr = s.split(" ");
  let indexArr = [];
  let index = 0;
  while (index != -1) {
    indexArr.push(index);
    index = arr.indexOf("Z", index + 1);
  }
  indexArr = indexArr.filter((x) => x != 0).map((x) => x - 1);
  while (indexArr.length != 0) {
    arr.splice(indexArr[indexArr.length - 1], 1);
    indexArr.splice(indexArr.length - 1, 1);
  }
  arr = arr.filter((x) => x != "Z").map((x) => parseInt(x));
  return arr.length == 0 ? 0 : arr.reduce((a, b) => a + b);
}

// function solution(s) {
//     const stack = []

//     s.split(' ').forEach((target) => {
//         if(target === 'Z') stack.pop();
//         else stack.push(+target)
//     })

//     return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
// }
// function solution(s) {
//     s = s.split(' ');
//     let arr = [];
//     for (let v of s) v === 'Z' ? arr.length ? arr.pop() : '' : arr.push(v);
//     return arr.reduce((a,v)=>a+ +v,0);
// }
