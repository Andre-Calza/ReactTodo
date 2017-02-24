// function add(a, b){
//   return  a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [...groupB, 4, ...groupA];
//
// console.log(final);


var person1 = ['Andre', 25];
var person2 = ['Jen', 29];

function greet (name, age){
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person1);
greet(...person2);

var names= ['mike', 'ben']
var final = ['Andre', ...names];
final.forEach(function (name){
  console.log('Hi ' + name);
});
