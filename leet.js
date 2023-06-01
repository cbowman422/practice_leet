
//----------------------------------------------------------------

// var addTwoNumbers = function(l1, l2) {
  
// };

// addTwoNumbers([2,4,3],[5,6,4]);

//----------------------------------------------------------------

var lengthOfLongestSubstring = function(s) {

  let array = [];
  let count = 0
  let array2 = [];
  let array3 = [];
 
   for (i=0; i < s.length; i++){
     array.push(s[i])
     for (j=0; j < array.length; j++){
      if(array[j] === s[i] && j !== i && i-1 > j){
       count = count + 1
           //console.log(array[j] + " " + j + " " + s[i] + " " + i)
           
           
           array2.push(i)
           array2.push(j)
           // console.log(array2)
           if (array2.length > 2){
             array2.splice(0,2);
             // console.log(array2)
             len = array2[0] - array2[1]
             console.log(len)
           }
       
      }
     }
   }
 
   
 };
 
 
 lengthOfLongestSubstring("bbbbb");


 //----------------------------------------------------------------