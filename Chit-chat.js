// Episode-2

// function x() {
//   const a = 10;
// }
// var xyz = 20;
// function expression - when a function is stored as a value in variable.
// and if function is given a name then it is named function expression.
// var x = function () {
//   console.log("I'm an anonymous function");
// };
// ==============================================
console.log(this);

const obj = {
  fn: function () {
    console.log(this);
  },
  fn2: () => {
    console.log(this);
  },
};
obj.fn(); //O/p : fn()
obj.fn2(); //O/p : window - arrow function refers to parents this object.
// ===================================
// function x() {
//   console.log(this);
//   function y() {
//     console.log(this);
//     function z() {
//       console.log(this);
//     }
//     z(); //window
//   }
//   y(); //window
// }
// x(); //window
// ======================================
const person = {
  name: "Shubham",
  print: function () {
    console.log(this);
  },
};
const person2 = {
  name: "New_Shubham",
};
// function x() {
//   console.log(this);
// }
// x.call(this); //window
// x.call(person); //shubham
// x.call(person2); //New_Shubham

person.print(); //Shubham;
// -------call() does function borrowing----
person.print.call(); //window
person.print.call(person2); //New_Shubham
person.print.call(person);
