
function sumNumbersInString (str) {
    
        if (str.trim() === "") return 0; 
      
        const cleanedStr = str.replace(/[\/,;*\\]+/g, "");
      
        const numbers = cleanedStr.split(/[^-0-9]/).filter(Boolean);
      
        const sum = [];
        const negatives = []; 
      
        numbers.forEach(numStr => {
          const num = parseInt(numStr, 10);
          console.log(num);
      
          if (num < 0) {
            negatives.push(num); 
          } else if (num <= 1000) {
            sum.push(num)
          }
        });
      
      
        return sum;
      }
      
      try {
        (sumNumbersInString("1,5"));
        (sumNumbersInString("")); 
        (sumNumbersInString("10//2,3\\,4*1001"));
        (sumNumbersInString("1//n;,-2,3\\5"));
    
      } catch (error) {
        console.error(error.message);
      }
      







