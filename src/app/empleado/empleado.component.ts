import { Component } from "@angular/core";
import {Empleado} from "./empleado";

@Component(
    {
        selector: 'empleado',
        templateUrl: './empleado.component.html'
    }
)

export class EmpleadoComponente{
    public titulo_empleado = 'Titulo de Empleados';

    //Creando instancia de empleado
    public empleado:Empleado;

    //Creando un arreglo de empleados
    public trabajadores:Array<Empleado>;

    public trabajadorExterno:boolean;
    public color:string;
    public colorSeleccionado:string;

    constructor(){
        //Asignando valores a los atributos del empleado utilizando el constructor.
        this.empleado = new Empleado("Alan Guzman",26,"desarrollador",true);


        //Agregar empleados nuevos al arreglo de trabajadores
        this.trabajadores = [
            new Empleado("Melissa Sanchez",26,"disenadora",true),//0
            new Empleado("Mushu Iguana",2,"mascota",false),//1
            new Empleado("Andrea Lopez",50,"cocinera",false)//2
        ];

        this.trabajadorExterno = false;
        this.color = "green";
        this.colorSeleccionado = "#ccc";
    }

    ngOnInit(){
        //mostrando empleado en la consola del explorador
        console.log(this.empleado);

        //mostrar listado de trabajodres en la consola del explorador
        console.log(this.trabajadores);
    }

    cambiarExterno(valor:boolean){
        this.trabajadorExterno = valor;
    }
}