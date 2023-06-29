// function DodatnieIUjemne (liczby){
//     if (liczby < 0){
//         console.log("Ta liczba jest ujemna")
//     }
//     if (liczby > 0){
//         console.log("Ta liczba jest dodatnia")
//     }
//     if (liczby == 0) {
//         console.log("Ta liczba nie jest dodatnia ani ujemna")
//     }
// }
// DodatnieIUjemne(-1)

// const determiningTheNumbers = (numbers) => {
//   if (numbers < 0 && numbers !== 0 ) {
//     console.log("It's a negative number");
//   }
//   if (numbers > 0  && numbers !== 0) {
//     console.log("It's a positive number");
//   } 
//  else if (numbers == 0) {
//     console.log("It's zero");
//   }
// };
// determiningTheNumbers(4);

const determiningTheNumbers = (numbers) => {
    if (numbers < 0) {
      console.log("It's a negative number");
    } else if (numbers > 0) {
      console.log("It's a positive number");
    } else {
      console.log("It's zero");
    }
  };
  determiningTheNumbers(4);