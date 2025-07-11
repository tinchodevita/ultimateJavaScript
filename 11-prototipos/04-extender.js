//no extender objetos de funciones constructuras como
//Array, Number; Boolean, etc

Object.prototype.isEqual = function(obj) {
    //...
}

let x = {};
x.isEqual({a: 1});