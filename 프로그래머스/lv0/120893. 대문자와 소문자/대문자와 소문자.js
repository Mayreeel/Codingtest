function solution(my_string) {
    let answer = []
    for (let i = 0;i<my_string.length;i++) {
        answer.push(my_string.charCodeAt(i));
    }
    answer = answer.map(x=>x>96?x-32:x+32);
    for (let i = 0;i<answer.length;i++) {
        answer[i]=String.fromCharCode(answer[i])
    }
    return answer.join("");
}