var seqlist = function(first,c,l){
    // Check if the number of terms is non-negative
    if (l < 0) {
      return [];
    }
  
    // Create an array to store the sequence
    const sequence = [];
  
    // Generate the arithmetic sequence
    for (let i = 0; i < l; i++) {
      sequence.push(first + i * c);
    }
  
    return sequence;
  }