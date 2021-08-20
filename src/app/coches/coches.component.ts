import { Component } from "@angular/core";
import { Coche } from "./coche";
import { PeticionesService } from "../services/peticiones.service";

@Component(
    {
        selector: "coches",
        templateUrl: "./coches.component.html",
        providers: [PeticionesService],
    }
)

export class CochesComponent{
    public coche!:Coche;
    public articulos!:any;
    //array para almacenamiento de carros
    public coches:Array<Coche>;

    constructor(
        private _peticionesService: PeticionesService
    ){
        this.coche = new Coche("","","");
        this.coches = [
            new Coche("Seat","120","Blanco"),
            new Coche("Renault","110","Azul")
        ];
    }

    ngOnInit(){
        console.log(this._peticionesService.getPrueba());
        this._peticionesService.getArticulos().subscribe(
            result =>{
                console.log(result);
                this.articulos = result;

                if(!this.articulos){
                    console.log('Error en el servidor');
                }
            },
            error =>{
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit(){
        console.log(this.coche);
        //cuando se haga el submit, hacer push en la lista
        this.coches.push(this.coche);
        //vaciar el objeto coche
        this.coche = new Coche("","","");
    }
}