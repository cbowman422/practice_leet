
// var twoSum = function(nums, target) {

//   for( i = 0 ; i < nums.length ; i++){
//     for( j = 0 ; j < nums.length ; j++){
//       if ( nums[i] + nums[j] === target && i !== j){
//         return(i,j)

//       }
    
//     }
//   }

// };


var twoSum = function(nums, target) {

 // define an object
  let object = {};
  let arry = [];

 // Set the obbject variables to the values of the array, and have the object values be set to the array indecis 
  for (i = 0; i < nums.length ; i++){
    object[nums[i]] = i
  }

 // Set a variable that is equal to the target - the array values
  for (let i = 0; i < nums.length; i++){
        const numPair = target - nums[i];

  // if numPair index of the array is in the object and is defined, and also not the initial iterator, return the iterator and the index value
  if(object[numPair] !== undefined && object[numPair] !== i){
    arry.push(i, object[numPair]);
    return(arry)
  }    
  } 
}


twoSum([1,2,3,4,6], 9);