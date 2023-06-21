function solution(n)
{
 
    return n.toString().split('').reduce((x, y) => x + Number(y), 0);
}