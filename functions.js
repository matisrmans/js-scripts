// function teksts(){
//     let name = "generic teksts";
//     return name;
// }

// console.log(teksts());

// rakstīt savu vārdu

// function writeName(name){
//     return name;
// }
// console.log(writeName("Matīss"));


//skaitīt no 1 līdz 10

// function skaitit(){
//     for(let i = 1; i<=10;i++){
//         console.log(i);
//     }
// }
// skaitit();


// izvada no ievadītiem skaitļiem
function skaita(num1, num2){
    if(num1< num2){
       for(let i = num1; i <= num2; i++){
            console.log(i);
        }
    }else{
        for(let i = num2; i<=num1;i++){
            console.log(i);
        }
    }
}

skaita(20, 15);