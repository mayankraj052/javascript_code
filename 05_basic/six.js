// const coding = ["js", "ruby", "java", "python", "cpp"]

//  const value = coding.forEach((item)=>{
//     //console.log(item);
//     return item;
// });
// console.log(value);
// // for each didn't return anything

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNums.filter((num)=>num>5); //[ 6, 7, 8, 9, 10 ]
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 5
// }) // agar scope {} open karte hai to return likhna padega or agar nahi to nahi karna padega.
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {num > 5
// }) // error.
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums =[];
// myNums.forEach((num) => {
//     if(num>5){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userRequest = books.filter((bk) =>bk.genre==="History" && bk.publish>1990)
  console.log(userRequest);
