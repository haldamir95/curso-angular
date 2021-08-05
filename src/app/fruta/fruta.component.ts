//Importar el modulo Component 
import { Component } from '@angular/core';


//Definir el componente con el Decorador
@Component(
    //lo siguiente es un JSON de Metadatos
    {
        //nombre de la etiqueta que utilizaremos
        selector: 'fruta',
        
        //lo siguiente es la plantilla (templateUrl) para definir que sera un archivo externo
        templateUrl: './fruta.component.html',
        //si utilizamos la plantilla con (template) el codigo html debe ser definido aqui mismo 
        /*template:   `
                    <h2> {{ nombre_componente }} </h2>
                    <p> {{ listado_frutas }} </p>
                    `*/
    }
)

//Para poder aplicar el componente, se debe de crear la clase
//export es para definir que esta clase podra ser utilizada desde otros archivos
export class FrutaComponent {
    //como cualquier clase, se pueden agregar atributos, con visibilidad etc.
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    //TS tiene visibilidad, por lo tanto las variables privadas se pueden utilizar unicamente en la clase que se declaro.
    private variable_privada = 'Soy privada';

    //TS tambien maneja tipos de datos, por lo tanto evita ciertos errores que se podian comenter en JS
    //public variable_string:string = 12;     //esto da error por la incompatibilidad de tipos
    public nombre:string = 'Alan';
    public edad:number = 26;
    public mayorEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero','Albanil', 'Fontanero'];

    //TS cuenta con un tipo de dato 'any' el cual se puede utilizar como cualquier tipo de dato.
    public trabajos2:Array<any> = ['Desarrollador', 20, true];

    variable_comodin:any = 'cualquier cosa y publica por defecto';

    constructor(){
        console.log(this.trabajos);

        //Es buena practica dar valor a las variables de la clase desde el constructor.
        this.nombre = "Giovanni";

    }

    ngOnInit(){
        this.holamundo(this.nombre);
    }

    holamundo(nombre:string){
        nombre = "Guzman";
        //alert("Hola Mundo "+nombre);
    }
}