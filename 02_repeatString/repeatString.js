const repeatString = function(word,number) {
newStr=""; 
if (number < 0)
    return "ERROR";
for (let i = 0; i < number; i++){
    newStr += word;
};
return newStr;
}
// Do not edit below this line
module.exports = repeatString;
