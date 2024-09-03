module.exports = function check(str, bracketsConfig) {

      let stack = [];
      let brackets = [];
      let closingBrackets = {};
    
      for(let i = 0 ; i < bracketsConfig.length; i++) {  
          brackets.push(bracketsConfig[i][0]);
          closingBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
      }

      for(let i = 0; i < str.length; i++) {  
         let currentBracket = str[i];
         let count = stack.filter(item => item === "|").length;

         if(brackets.includes(currentBracket) && currentBracket !== "|") {
              stack.push(currentBracket);
              
         } else if(brackets.includes(currentBracket) && currentBracket === "|" && count === 0) {  
                stack.push(currentBracket);
         } else {  
           if(stack.length === 0) return false ;
           
           let lastElem = stack[stack.length - 1];

           if(closingBrackets[lastElem] === currentBracket) {  
              stack.pop();
           } else {  
            console.log("3")
             return false;
             
           }
         }
      }
      return stack.length === 0; 
}

// let str = '())(';

// console.log(check('[]()(', [['(', ')'], ['[', ']']]));

// console.log(check(str,[['(', ')']]))