function solution(n) {
    let i = 2;
    while(i<=(n - 1)/2){
        if (n%i==1){
            return i;
        }
        i++
    }
    return n - 1;
}