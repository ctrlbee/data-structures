var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0; 

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[counter] = value; 
    counter++; 
  };

  someInstance.dequeue = function() {
    var results = storage[0]; 
    delete storage[0]; 
 
    if(counter>0){
      counter--;   
    }

    //move each element back 1 place 
    for(var i=0; i<=counter; i++){
      storage[i] = storage[i+1];
    }

    return results; 
  };

  someInstance.size = function() {
    return counter; 
  };

  return someInstance;
};
