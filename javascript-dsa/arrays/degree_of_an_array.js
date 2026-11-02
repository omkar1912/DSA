//LeetCode 697

const smallestSubArray = (nums) => {
  const freq = new Map();
  const first = new Map();
  const last = new Map();

  let degree = 0;
  let answer = Infinity;

  for(let i = 0 ; i < nums.length; i++){
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);

    if(!first.has(nums[i])){
      first.set(nums[i], i);
    }

    last.set(nums[i], i);

    degree = Math.max(degree, freq.get(nums[i]));
    
  }

  for(const [num,count] of freq){
    if(count === degree){
      answer = Math.min(answer, last.get(num) - first.get(num) + 1)
    }
  }

  return answer;
}


console.log(smallestSubArray([1, 2, 2, 3,3, 1,2]));

const delay = ((ms) => new Promise(res => setTimeout("Done", 100)));