const sumAll = function(num1, num2) {
    let startNum = 0;
    let endNum = 0;
    let numList = [];
    let finalSum = 0;
    
        
        if (num1 >= 0 && num2 > 0 && Number.isInteger(num1) == true && Number.isInteger(num2) == true){
            
            // calculates 
            if (num2 > num1){
                startNum = num1;
                endNum = num2;
                    
                for (let i = startNum; i <= endNum; i++){
                numList.push(i);
                };
                
                numList.forEach(sumNum);
                
                function sumNum(item){
                finalSum = finalSum + item;
                };
            }
            
            if (num1 >= num2){
                startNum = num2;
                endNum = num1;
                    
                for (let i = startNum; i <= endNum; i++){
                numList.push(i);
                }
            
                numList.forEach(sumNum);
                
                function sumNum(item){
                finalSum = finalSum + item;
                };
            }
                
        
        }
        
        else {
                finalSum = 'ERROR';
        }
        
    //console.log(numList);	
    return finalSum;


};

// Do not edit below this line
module.exports = sumAll;
