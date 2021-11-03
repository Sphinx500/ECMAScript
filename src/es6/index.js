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