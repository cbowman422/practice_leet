


var twoSum = function(nums, target) {
  
  const indices = {};

  for(let i = 0; i < nums.length; i++){
   indices[nums[i]] = i;
  }

  for(let i = 0; i < nums.length; i++){
    const complement = target - nums[i];

    if( indices[complement] !== undefined && i !== indices[complement]){
      return [i, indices[complement]]
    }
   }
};

console.log(twoSum([1,2,3,4,5],6));