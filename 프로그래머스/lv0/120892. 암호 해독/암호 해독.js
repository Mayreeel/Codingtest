function solution(cipher, code) {
    var answer = [];
    for (let i = 1;i*code-1<cipher.length;i++) {
        answer.push(cipher.split("")[i*code-1])
    }
    return answer.join("");
}