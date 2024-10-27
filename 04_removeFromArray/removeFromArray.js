const removeFromArray = function(arr, ...lookupNum ){
		
  let newArr =[];
  arr.forEach((item) => {
    if (!lookupNum.includes(item))
    {
      newArr.push(item);

    };
  });
 return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
