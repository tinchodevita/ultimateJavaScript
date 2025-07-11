//poli -> muchas
//morfismo -> formas

//muchos objetos que se crearon desde funciones contructuras distintas y de distinta forma compartes todos un mismo método

function Select() {}

Select.prototype.render = function() {
    console.log('renderizando select...')
}

function Checkbox() {}

Checkbox.prototype.render = function() {
    console.log('renderizando checkbox...')
}

let componentes = [
    new Select(),
    new Checkbox(),
];

componentes.forEach(c => c.render());