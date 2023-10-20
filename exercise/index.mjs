// This exercise is from https://coursework.vschool.io/array-reduce-exercises/

function total(arr) {
  // your code here
  return arr.reduce((prev, num) => {
    return prev + num
  }, 0)
}

console.log(total([1,2,3])); // 6


function stringConcat(arr) {
  // your code here 
  return arr.reduce((prev, num) => {
    prev += String(num)
    return prev
  }, '')
}

console.log(stringConcat([1,2,3])); // "123"


function totalVotes(arr) {
  // your code here    
  return arr.reduce((prev, obj) => {
    return obj.voted ? prev + 1 : prev
  }, 0)
}

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7


function shoppingSpree(arr) {
  // your code here    
  return arr.reduce((prev, obj) => {
    return prev + obj.price
  }, 0)
}

var wishlist = [
   { title: "Tesla Model S", price: 90000 },
   { title: "4 carat diamond ring", price: 45000 },
   { title: "Fancy hacky Sack", price: 5 },
   { title: "Gold fidgit spinner", price: 2000 },
   { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005


function flatten(arr) {
  // your code here    
  return arr.reduce((prev, arr) => {
    arr.map(value => prev.push(value))
    return prev
  }, [])
}

var arrays = [
   ["1", "2", "3"],
   [true],
   [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];



var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
 // your code here
 return arr.reduce((prev, obj) => {
  obj.age <= 25 ? prev['numYoungPeople'] = (prev['numYoungPeople'] || 0) + 1 : null;
  obj.age >= 26 && obj.age <= 35 ? prev['numMidPeople'] = (prev['numMidPeople'] || 0) + 1 : null;
  obj.age >= 36 && obj.age <= 55 ? prev['numOldPeople'] = (prev['numOldPeople'] || 0) + 1 : null;

  obj.age <= 25 && obj.voted ? prev['numYoungVotes'] = (prev['numYoungVotes'] || 0) + 1 : null;
  obj.age >= 26 && obj.age <= 35 && obj.voted ? prev['numMidVotes'] = (prev['numMidVotes'] || 0) + 1 : null;
  obj.age >= 36 && obj.age <= 55 && obj.voted ? prev['numOldVotes'] = (prev['numOldVotes'] || 0) + 1 : null;
   return prev;
 }, {})
}

console.log(voterResults(voters)); // Returned value shown below:

// { numYoungVotes: 1,
// numYoungPeople: 4, <= 25
// numMidVotesPeople: 3,
// numMidsPeople: 4, >= 26 && <= 35
// numOldVotesPeople: 3,
// numOldsPeople: 4 >= 36 && <= 55
// }



var addTwoNumbers = function(l1, l2) {
  const num1 = l1.reverse().reduce((prev, num) => {
    prev += num
    return prev
  }, '')
  const num2 = l2.reverse().reduce((prev, num) => {
    prev += num
    return prev
  }, '')

  const result = Number(num1) + Number(num2); // 807
  return Array.from(String(result), str => Number(str)).reverse()
  
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.



var createCounter = function(n) {
    let called = n - 1;
  return function() {
      return called += 1
  };
};
 
const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
 
