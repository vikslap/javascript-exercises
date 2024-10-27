const reverseString = function(stringInput) 
    {
        let reverseInput = [];
        let newString = "";

        for (let i = 0; i < stringInput.length; i++){
          reverseInput[stringInput.length - (1+i)] = stringInput[i];
          
        };

        for (let counter = 0; counter < reverseInput.length; counter++){
          newString += reverseInput[counter];
        }
        return(newString);
    };

// Do not edit below this line
module.exports = reverseString;