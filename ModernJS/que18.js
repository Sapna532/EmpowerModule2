
// a) Output
if (true) {
  let x = 10; 
  var y = 20;  
}

console.log(y); 


// b) Optional Chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user.details.email);        
console.log(profile.user.details.phone?.num);   



// c) Example preventing runtime error
const student = {
  name: "A",
  marks: { math: 90 }
};

console.log(student.marks.science?.score);