


var twoSum = function(nums, target) {
  
  const indices = {};

  for(let i = 0; i < nums.length; i++){
   indices[nums[i]] = i;
   console.log(indices)
  }

  for(let i = 0; i < nums.length; i++){
    const complement = target - nums[i];
    console.log(indices[complement])

    if( indices[complement] !== undefined && i !== indices[complement]){
      return [i, indices[complement]]
    }
   }
};

console.log(twoSum([9,3,3,4,5],6));