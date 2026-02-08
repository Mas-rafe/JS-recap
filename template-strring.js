function sum (num1,num2) {
    const result = num1 + num2;
    // const output = 'sum of' + num1 + 'and' + num2 + "is equal to " + result;
    
    // here we'll use template string-` `

    const  output = `sum of ${num1} and ${num2} is equal to ${result}`
    
    console.log(output);
    
}
sum(10,20)

const price = 50;
const discountedPrice = `Discounted Price after 20% discount ${price * 0.8}`
console.log(discountedPrice);
