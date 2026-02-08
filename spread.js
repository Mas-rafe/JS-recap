const numbers = [87, 90 , 95, 110 ];
console.log(numbers);
console.log(...numbers);

// const max = Math.max(1122, 232, 456 , 500);
const max = Math.max(...numbers)
console.log(max);

// const first = [1 ,2 ,3 ,4 ,5];
// const second = first;
// second.push(6);
// console.log(first);


const first = [1 ,2 ,3 ,4 ,5];
const second = [...first];
const third = [...first , 97,98,99]
second.push(6);
// console.log(first);
// console.log(third); 

const ages = [22 , 33 , 44];
const prices = [220 ,330 , 440];
const all = [...ages , ...prices]

const person = { name: 'Masrafe' , age: 25 }
const employee = { designation: ' dev' , ...person};
console.log(employee);



