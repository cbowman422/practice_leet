


var twoSum = function(nums, target) {
  let arry = []
  for(let i=0; i < nums.length; i++){
      for(let j=0; j < nums.length; j++){
          if (nums[i] + nums[j] === target && arry.length < 2 && i !== j){
              arry.push(i,j)
          } 
      }
  }
  return arry
};

console.log(twoSum([1,2,3,4,5],6));