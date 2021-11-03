//Normal JS
function newFuncion(name,age,country){
    var name = name || 'Fer';
    var age = age || 21;
    var country = country || 'MX';
    console.log(name,age,country);
}

//ES6

function newFuncion2(name='Fer',age=21,country='MX'){
    console.log(name,age,country);
}

//Para llamar

//toma los elementos por defecto
newFuncion2()
//con elementos especificos
newFuncion2('Fernando', 24, 'CO');


//Template Literals
//Separan o unen varios elementos

//SIN
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//CON
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);




// LET y CONST, Multilínea, Spread Operator y Desestructuración

//ANTES
let lorem = "Quiero aprender ECMAScript y ser genial \n"
+ "una nueva aventura";

//AHORA
let lorem2=`otra frase epica super genial
ahora es otra frase diferente
`;
console.log(lorem);
console.log(lorem2);

//Destructuracion de elementos
//SIN
let person = {
    'name': 'John',
    'age': 34,
    'country': 'MX'
}
console.log(person.name,person.age,person.country);

//CON
let {name,age,country} = person;
console.log(name,age,country);


//Operador de propagacion para expandir elementos
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Jessica', 'Camila']

let education = ['David', ...team1, ...team2];
console.log(education);

//Elementos para guardar en memoria

//ANTES
var hola = 'Hola';

//Es accesible
{
    var globalVar = "Global";
}

//no es accesible por fuera
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//uso de Const, no permite reasignar
const a = 'b';

