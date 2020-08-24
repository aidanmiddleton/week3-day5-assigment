
let example = [1, 2, 3, 4, "five", 6, 7];

let example2 = [1, 2];

const logThird = function(arr) {
  if (arr.length < 3) {
    console.log("There is no third item");
  } else { 
    console.log(arr[2]);
  }
};

//answer:
// const logThird = function (arr) {
//   if (arr.length >= 3) {

//     console.log(arr[2])

//   } else {
//     console.log("There is no third item")
//   }
// };

logThird(example);

// answer should be 3

logThird(example2);