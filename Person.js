const Person = {name: "Juris", age: 34, isStudent: false};

console.log("Name: " + Person.name);
console.log("Name2: " + Person['name']);

if(Person.age >= 18){
    console.log('pilngadīgs')
}else{
    console.log('nepilngadīgs')
}

if(Person.isStudent == true){
    console.log("Ir students");
}else{
    console.log("Nav students");
}

Person.course = "PT2024";
console.log(Person.course);