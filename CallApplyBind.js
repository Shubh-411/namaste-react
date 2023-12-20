let name = {
  fname: "Shubham",
  lname: "Shukla",
  // print: function () {
  //   console.log(this.fname + " " + this.lname);
  // },
};
// we can write function outside the object as well
let print = function (hometown, state) {
  console.log(
    this.fname + " " + this.lname + " from " + hometown + ", " + state
  );
};
// name.print(); //OR can be called as below as well:-
// in call 1st arg is reference to this and 2nd arg is parameter value for the function
print.call(name, "Rewa", "Madhya Pradesh");
let name2 = {
  fname: "Sachin",
  lname: "Tendulkar",
};
// Call -> Function Borrowing - we can borrow functions from other objects using {call()-each and every method in JS has access to call()} and with the data of some other objects
// name.print.call(name2);
print.call(name2, "Mumbai", "Maharashtra"); //  if calling function is outside the object

// Apply -> Difference b/w Call() & Apply() is - In call we pass arg individually, and in apply() we pass args as Arraylist ["", "", ...]
print.apply(name2, ["Mumba", "Maharashtra"]); //2nd arg - list to args what we have pass into the function print() above
// Bind -> looks exactly same as Call() but only diff is instead of calling directly print(), It bind() binds the method print() with the obj name2 and returns the copy of the method as a function
let printMyName = print.bind(name2, "Mumbali", "Mahrshtraaaa");
// In above line it will create a copy of print() and bind that to name2 object and will return a function which can be called later as below line
// console.log(printMyName());
printMyName();
// so bind() doesn't directly invokes the method but gives you the copy of that exactly same method which can be invoked later.
