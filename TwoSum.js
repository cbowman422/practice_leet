


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


//Shadow Thread — this thread will be launched along the JavaScript thread. Its responsibility is to compute the positions of the views and construct a tree of layout coded in the JS thread. React Native utilizes a layout engine called Yoga which converts flexbox-based layout into a layout system that a native host can understand.

//The Bridge is, without a doubt, the most important part of React Native’s architecture. It allows us to exchange information between the JavaScript and Native layers through JSON messages

// A native event occurs. For example, touch or scrolling event.
// The serialized message is sent from the native side through the bridge with all the necessary data.
// JavaScript receives the message, deserializes it and decides what to do next. In that case, changing icon
// The message is sent from the JavaScript layer through the bridge with information about the requested action.
// The native side receives the message, deserializes it and updates the view.

//Starting from version 0.68, it’s possible to use the new React Native architecture, which drops the Bridge mechanism in favor of the JavaScript Interface.

// C++ will expose native Java/Obj-C methods/objects to JavaScript via the “HostObject”. JavaScript will hold a reference to this object, which will enable it to access methods and props directly on Java/Obj-C API.

// This can be done synchronously on the same thread or asynchronously by creating a new thread.