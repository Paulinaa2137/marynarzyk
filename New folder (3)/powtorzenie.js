// // napisz funkcje, ktora bedzie mówiła czy jestescie wyżsi od Marka, który ma 174 cm wzrostu

// var wzrostMarka = 170
// var twojWzrost = []
// function wyliczanieWzrostu (twojWzrost){
//     if(wzrostMarka > twojWzrost){
// console.log("Jestes nizszy od Marka")
//     }
//     if (wzrostMarka < twojWzrost){
//         console.log("Jestes wyzszy od Marka")
//     }
// };
//wyliczanieWzrostu(179);

//Funkcja sprawdzająca czy liczba jest dodatnia czy na minusie
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

// napisz funkcje, która będzie sprawdzala czy podana przez ciebie liczba jest parzysta czy nieparzysta

// function ParzysteINieparzyste(liczby){
// if (liczby %2 == 0){
//     console.log("liczba jest parzysta")
// }
// else {
//     console.log("liczba nie jest parzysta")
// }
// }
// ParzysteINieparzyste(1)

// //napisz funkcje, która będzie wyświetlała marki aut z użyciem obiektów
// var car = {
//    marka: "BNW",
//    kolor: "czerwony",
//    predkoscMax: 360,
//    iloscMiejsc:2
// };

// var car1 = {
//    marka: "Jeep",
//    kolor: "żółty",
//    predkoscMax: 360,
//    iloscMiejsc: 4
// };

// var car2 = {
//    marka: "Volkswagen",
//    kolor: "biały",
//    predkoscMax: 360,
//    iloscMiejsc: 4
// };

// var car3 = {
//    marka: "Peugeot",
//    kolor: "czarny",
//    predkoscMax: 360,
//    iloscMiejsc: 4
// };

// var car4 = {
//    marka: "Ford",
//    kolor: "srebrny",
//    predkoscMax: 360,
//    iloscMiejsc: 4
// };

// var cars = [car, car1, car2, car3, car4];

// function wyswietlanie (lista) {

//    for (var i = 0; i < lista.length; i++) {
//        console.log(lista[i].marka);

//    }
// }
// wyswietlanie(cars);

// Napisz funkcję, która będzie prostą wersją gry “Kamień, papier, nożyce”. Może to być wersja polska lub angielska.
//  Funkcja jako argumenty przyjmuje dwa stringi (“kamień”, “papier” lub “nożyce”), a następnie w formie alertu podaje wynik (czyli np. wypisuje “Gracz nr 1 wygrał” – zakładamy, że gracz numer 1 to osoba, która podała pierwszy string).

// function Gra_kpn(gracz1, gracz2) {
//   function sprawdzanie(gracz1, gracz2) {
//     if (gracz1 === gracz2) {
//       return "0";
//     }
//     if (gracz1 === "kamien") {
//       if (gracz2 === "nozyce") {
//         return "1";
//       } else {
//         return "2";
//       }
//     }
//     if (gracz1 === "papier") {
//       if (gracz2 === "kamien") {
//         return "1";
//       } else {
//         return "2";
//       }
//     }
//     if (gracz1 === "nozyce") {
//       if (gracz2 === "papier") {
//         return "1";
//       } else {
//         return "2";
//       }
//     }
//   }

//   function wygranyjest() {
//     if (sprawdzanie(gracz1, gracz2) === "1") {
//       return "Wygral gracz numer jeden";
//     }
//     if (sprawdzanie(gracz1, gracz2) === "2") {
//       return "Wygral gracz numer dwa";
//     }
//     if (sprawdzanie(gracz1, gracz2) === "0") {
//       return "Remis";
//     }
//   }

//   return wygranyjest();
// }

// console.log(Gra_kpn("papier", "papier"));

// Napisz funkcję, która przyjmuje jako argument jakieś słowo. Ma ona wypisać, ile samogłosek zawiera podane słowo. 
// Jeśli do funkcji podano argument, który nie jest typu tekstowego, należy wyświetlić odpowiedni komunikat (w formie alertu lub console.loga).


// console.log("1"==1);
// console.log("1"== true);
// console.log(typeof(Nan)== Number);
// console.log("two">"three");
// console.log("W"==='W');
// console.log("1">"jablko");
// console.log("jablko"!==="jablko");//ERROR
// var x ="100"
// var y = 3
// console.log(x-y)
// let x = 11;
// x%=3
// console.log(,25 +"3");