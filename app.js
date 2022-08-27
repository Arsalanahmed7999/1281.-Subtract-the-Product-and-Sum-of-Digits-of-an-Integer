console.log('added');
// 1281. Subtract the Product and Sum of Digits of an Integer
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15




var subtractProductAndSum = function(n) {
    let sForm = n.toString();
    let mul = 1;
    let addition = 0;
    let result = 0; 

for(let i = 0; i<sForm.length ; i++){

mul*=Number(sForm[i]);
addition+=Number(sForm[i])
result = mul - addition;

}
return result;

};
console.log(subtractProductAndSum(234));