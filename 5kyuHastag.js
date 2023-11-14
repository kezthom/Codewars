function generateHashtag (str) {
    // Check if the input is an empty string or if the result is too long
     if (!str || str.trim() === '') {
       return false;
     }
   
     // Capitalize the first letter of each word and join them
     const hashtag = '#' + str
       .split(' ')
       .filter(word => word !== '')
       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
       .join('');
   
     // Check if the result is longer than 140 characters
     return hashtag.length <= 140 ? hashtag : false;
   }