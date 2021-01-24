// A constructor enable us to provide any custom initialization that must be done before calling any methods can be called on an instantiated object. 

class Geometry {
    constructor(name) {
        this.name = name;
    }
}


const ploy1 = new Geometry("rec");
const ploy2 = new Geometry("circle");

console.log(ploy1.name, ploy2.name);

