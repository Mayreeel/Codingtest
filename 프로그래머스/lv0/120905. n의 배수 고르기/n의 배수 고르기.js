function solution(n, numlist) {
    var answer = [];
    return numlist.filter(x=>x%n==0);
}