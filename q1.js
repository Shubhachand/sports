// . Write a function calculateDiscount that takes two 
// parameters: price and discount (with a default value of 10). The function should 
// return the final price after applying the discount. 

function calculateDiscount(price, discount) {
    return price * ((100-discount) / 100);
}
let ans = calculateDiscount(100, 10); 
console.log(ans);