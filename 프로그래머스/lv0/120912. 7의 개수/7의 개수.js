function solution(array) {
    var answer = 0;
    array.map((x)=>String(x).split("").forEach(x=>{if(x==7){answer+=1}}))
    return answer;
}