
function sumNumbersInString (str) {
    
        if (str.trim() === "") return 0; 
      
        const cleanedStr = str.replace(/[\/,;*\\]+/g, "");
      
        const numbers = cleanedStr.split(/[^-0-9]/).filter(Boolean);
      
        let sum = 0;
        const negatives = []; 
        let result;
      
        numbers.forEach(numStr => {
          const num = parseInt(numStr, 10);
          if (num < 0) {
            negatives.push(num); 
          } else if (num <= 1000) {
            sum += num;

          }
        });
      
        const numbersArray = sum.toString().split('');
        result = numbersArray.reduce((acc, val) => acc + parseInt(val), 0);
        // console.log(result)
        return result;
      }
      
      
      try {
        console.log(sumNumbersInString("1,5"));
        console.log(sumNumbersInString("")); 
        console.log(sumNumbersInString("10//2,3\\,4*1001"));
        console.log(sumNumbersInString("1//n;,-2,3\\5"));
    
      } catch (error) {
        console.error(error.message);
      }
      







