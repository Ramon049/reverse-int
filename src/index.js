module.exports = function reverse (n) {
    let res;
    
    if(n >= 0){
        res = n.toString().split('').reverse().join('');
    }
    if(n < 0){
        n *= -1; 
        res = n.toString().split('').reverse().join('');
       
    }
  return +res;
}
