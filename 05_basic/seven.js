const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const nemNums = myNums.map((num) =>num+10)
// console.log('using map')
// console.log(nemNums);
// console.log('using loop');
// for (let i = 0; i < myNums.length; i++) {
//     myNums[i] = myNums[i] + 10;  // Directly modifying the original array
// }
// console.log(myNums);

const nemNums = myNums
                      .map((num) => num * 10)
                      .map((num)=>num+1)
                      .filter((num)=> num>40)
console.log(nemNums);
