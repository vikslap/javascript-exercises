const sumAll = function(num1, num2) {
    let startNum = 0;
    let endNum = 0;
    let numList = [];
    let finalSum = 0;
    
        
        // Tests whether the input is greater than zero and integer
        if (num1 >= 0 && num2 > 0 && Number.isInteger(num1) == true && Number.isInteger(num2) == true){
            
            // creates an array of numbers from staring number to ending number when ending number is bigger
            if (num2 > num1){
                startNum = num1;
                endNum = num2;
                    
                for (let i = startNum; i <= endNum; i++){
                numList.push(i);
                };
                
                numList.forEach(sumNum);
            }
            
            // creates an array of numbers from staring number to ending number when the starting number is bigger
            if (num1 >= num2){
                startNum = num2;
                endNum = num1;
                    
                for (let i = startNum; i <= endNum; i++){
                numList.push(i);
                }
            
                numList.forEach(sumNum);
            }

            // calculates the sum of elements in the numList array
            function sumNum(item){
                finalSum = finalSum + item;
                };
        
        }
        // when the entered numbers fail the initial test
        else {
                finalSum = 'ERROR';
        }
        
    //console.log(numList);	
    return finalSum;


};

// Do not edit below this line
module.exports = sumAll;
