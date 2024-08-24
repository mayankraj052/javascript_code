// const name = "mayank"
// const repoCount = 50
// // console.log(name +" "+ repoCount+" "+"hii")
// console.log(`my name is ${name} nad my repo count is ${repoCount}`);
// // ` -> backticks  string interpolition

 const gameName = new String("mayank");

//  console.log(gameName[1]);//a
//  console.log(gameName.__proto__); // {}
//  console.log(gameName.length); // 6
//  console.log(gameName.toUpperCase()); // MAYANK
//  console.log(gameName.charAt(4)); // n
// console.log(gameName.indexOf('a')); //1
// console.log(gameName.charAt(4)); 
// const newString = gameName.substring(0,4); // maya ( n,m) -> n_ _ _ _ -> m-1    can not use negative

// console.log(newString);

const anotherString = gameName.slice(-5,3)
console.log(anotherString) // ay
