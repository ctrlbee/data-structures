var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods); 
  obj.storage = {}; 
  obj.counter = 0; 
  return obj; 
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.counter] = value; 
    this.counter++; 
  },

  dequeue : function() {
    var results = this.storage[0]; 
    delete this.storage[0]; 

    if (this.counter > 0) {
      this.counter--; 
    }

    for (var i = 0; i <= this.counter; i++) {
      this.storage[i] = this.storage[i + 1]; 
    }

    return results; 
  },

  size : function() {
    return this.counter; 
  },
}; 

