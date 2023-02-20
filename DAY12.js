function solution(nums) {
  return nums.filter((x, y) => nums.indexOf(x) == y).length < nums.length / 2
    ? nums.filter((x, y) => nums.indexOf(x) == y).length
    : nums.length / 2;
}
