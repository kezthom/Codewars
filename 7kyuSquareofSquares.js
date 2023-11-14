var isSquare = function(n){
    let k;
  for(let i = 0; i < n+1; i++){
  k = n/i;
  if(i === k){
  return true;
  }
  }
  if(n<0){
  return false
  } else if(k==1) {
  return false
  } else {
  return true
  }
  
  }