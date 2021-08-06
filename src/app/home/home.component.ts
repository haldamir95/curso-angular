import { Component } from "@angular/core";

//importacion del servicio
import { RopaService } from "../services/ropa.service";

@Component(
    {
        selector: 'home',
        templateUrl: './home.component.html',
        providers: [RopaService]
    }
)

export class HomeComponente{
    public titulo:string = 'Pagina Principal';
    //Array para ejercicio de servicios con ropa
    public listado_ropa!:Array<string>;
    //variable para utilizar TwoWay DataBinding y  almacenar el valor del input
    public prenda_a_guardar!:string;

    //variable para los pipes de fecha
    public fecha!:Date;

    constructor(
        private _ropaService:RopaService
    ){
        this.fecha = new Date(2021, 7, 5);
    }

    ngOnInit(){
        //caputrar el listado de ropa del servicio
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);

        console.log(this._ropaService.prueba());
        console.log(this._ropaService.pruebaParametro('Camisa Nike'));
    }

    //Metodo que llama al servicio de ropa y agrega una prenda al arreglo.
    guardarPrenda(textbox:HTMLElement){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = '';
        textbox.focus();
    }


    //Metodo para eliminar una prenda
    eliminarPrenda(indice:number){
        this._ropaService.deleteRopa(indice);
    }
}