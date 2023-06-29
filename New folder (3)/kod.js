// const person = {name: "Oleksandr", surname: "Yeroshkin"};
// for (let x in person){
// console.log(x);
// console.log(person[x]);
// }


const persons = [{name: "Oleksandr", surname: "Yeroshkin"}, {name: "Daniel", surname: "Turon"}];

for(person of persons){
    console.log(person);
}

