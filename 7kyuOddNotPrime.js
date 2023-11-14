function oddNotPrime(n){
    const neg=[];
    for (let i=1; i<=n;i+=2){
    neg.push(i)
    }
    const prime=[];
    for (let i=0; i<=neg.length;i++){
    if (!isPrime(neg[i])){
    prime.push(neg[i])}
    }
    return prime.length
}

function isPrime(n) {
  let rt = Math.sqrt(n);
  for(let i = 2; i <= rt; i++) {
    if(n % i === 0) return false; 
  }
  return n !== 1;
}