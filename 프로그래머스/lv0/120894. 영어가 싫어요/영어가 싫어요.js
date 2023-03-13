function solution(numbers) {
  const strNum = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
  strNum.map((nums, index) => {
    numbers = numbers.split(nums).join(index)});
  
  return Number(numbers);
}