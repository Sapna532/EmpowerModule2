
// 1. TEMPLATE LITERALS

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multi = `Line 1
Line 2
Line 3`;
console.log(multi);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);



// 2. ARROW FUNCTIONS & this

// a)
const square = n => n * n;
console.log(square(5));

// b)
const obj1 = {
  value: 50,
  test: () => console.log(this.value)
};
obj1.test();  

// c) Fix using normal function
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();



// 3. SPREAD, REST, COPYING OBJECTS

// a) shallow copy
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b) merge
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c) rest
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(5, 9, 1));


// 4. DESTRUCTURING + OPTIONAL CHAINING
// a)
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c)
const info = {};
console.log(info.user?.name);  


// 5. SCOPING — let / var / const

// a)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// b)
for (let j = 0; j < 3; j++) {}

// c)


// 6. TERNARY PRACTICE

// a)
let speed;
let kmph = 70;
speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b)
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

// c)
let num = -1;
const type =
  num > 0 ? "Positive" :
  num === 0 ? "Zero" :
  "Negative";
console.log(type);


// 7. SPREAD, REST & ARRAYS

// a)
const nums = [1, 2, 3];
const nums2 = [...nums, 4, 5];
console.log(nums2);

// b)
const aArr = ["x", "y"];
const bArr = ["z"];
const combo = [...aArr, ...bArr];
console.log(combo);

// c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// 8. OBJECT DESTRUCTURING & SHORTHAND

// a)
const user1 = { id: 101, status: "active" };
const { id: userId, status } = user1;
console.log(userId, status);

// b)
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

// c)
const x = 10, y = 20;
const obj3 = {
  x,
  y,
  greet() {
    return "Hello!";
  }
};
console.log(obj3.greet());


// 9. TEMPLATE LITERALS PRACTICE

// a)
console.log(`Today's date is ${new Date().toDateString()}`);

// b)
const NAME = "John";
const SCORE = 88;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10. ARROW FUNCTION SHORTHANDS
// a)
const add = (a, b) => a + b;
console.log(add(5, 7));

// b)
const isAdult = age => age >= 18;
console.log(isAdult(19));

// c)
const double = n => n * 2;
console.log(double(8));


// 11. SPREAD OPERATOR – ARRAYS & OBJECTS

// a)
const arrClone = [...nums];
console.log(arrClone);

// b)
const addFront = [100, ...nums];
console.log(addFront);

// c)
const objA = { name: "A", age: 20 };
const objB = { age: 30, city: "Hyd" };
const finalObj = { ...objA, ...objB }; 
console.log(finalObj);


// 12. OPTIONAL CHAINING MORE PRACTICE

const user = {
  name: "Alex",
  address: { city: "Bangalore" }
};

// a)
console.log(user.address?.city);

// b)
console.log(user.job?.title); 

// c)
const nested = {};
console.log(nested.a?.b?.c); 