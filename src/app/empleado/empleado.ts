export class Empleado{
    
    
    
    
    
    /*
    Esta es la forma tipica de crear atributos de la clase y asignarle valores desde el constructor

    public nombre:string;
    public edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    */

    //TS tiene una forma de definir atributos y asignar valor a los atributos de una clasede forma mas rapida
    //y es declarando los atributos en los parametros del constructor. 
    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean
    ){

    }
}