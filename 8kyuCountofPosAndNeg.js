function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
     return [];
   }
 
   let countPositives = 0;
   let sumNegatives = 0;
 
   for (let number of input) {
     if (number > 0) {
       countPositives++;
     } else if (number < 0) {
       sumNegatives += number;
     }
   }
 
   return [countPositives, sumNegatives];
 }