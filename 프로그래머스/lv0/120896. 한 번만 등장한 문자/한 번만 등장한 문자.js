function solution(s) {
    var answer = [];
    s.split("").map((x)=>{
        if (s.indexOf(x)===s.lastIndexOf(x)) {
        answer.push(x);
    }})
    return answer.sort().join("");
}