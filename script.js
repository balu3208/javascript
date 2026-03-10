const colors = ['red', 'green', 'blue'];

const [first, second, third] = colors;
console.log(first);
console.log(third);

const[,,blue] = colors;

const [a = 0, b=0, c=0, d=0] = [10, 20];
console.log(d);