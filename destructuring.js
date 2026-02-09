const product = { name: 'shirt' , price: 500 , quantity: 7 }


// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalAmount =  yourPay + vatAmount;

// const price = product.price;

// const discount = price*20/100;
// const yourPay = price - discount;
// const vatAmount = price*7/100;
// const totalAmount =  yourPay + vatAmount;

const price = product.price;

const discount = price*20/100;
const yourPay = price - discount;
const vatAmount = price*7/100;
const totalAmount =  yourPay + vatAmount;

const device = {name:'phone' , brand:'samsung' ,price: 10000 };
const { brand } = device;

//---------------------------------------------//
//For Array
const numbers = [25,88,89,101];
const [first,second] = numbers;

