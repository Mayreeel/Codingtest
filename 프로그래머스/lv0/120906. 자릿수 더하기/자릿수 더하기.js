function solution(n) {
    return String(n).split("").map(Number).reduce((x,y)=>x+y);
}