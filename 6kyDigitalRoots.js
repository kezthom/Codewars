
function digitalRoot(n) {
    2
      let res = n;
    3
    ​
    4
      while (res >= 10) {
    5
        res = 0;
    6
    ​
    7
        while (n > 0) {
    8
          res += n % 10;
    9
          n = Math.floor(n / 10);
    10
        }
    11
 
    12
        n = res;
    13
      }
    14
    ​
    15
      return res;
    16
    }
    17
    ​
    18
    console.log(digitalRoot(456)); // Output: 6
    19
    ​
