let obj = {};
let obj2 = new Object();

function Usuario(){
    this.name = "Chanchito";
}

let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(eval(s1), eval(s2));
// VALUE OF PASA A VARIABLE LITERAL
console.log(s2.valueOf());