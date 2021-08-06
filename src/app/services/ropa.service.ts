//Import para permitir que el decorador sea Injectable
import { Injectable } from "@angular/core";


//El decorador Injectable va vacio
@Injectable()


//Exportar y crear la clase del servicio
export class RopaService{
    //Variable para pruebas
    public nombrePrenda:string = 'Pantalones vaqueros';
    //arreglo para ejercicio
    public coleccion_ropa = ['Pantalones Blancos','Camiseta Roja'];


    //Metodo de prueba
    prueba(){
        return this.nombrePrenda;
    }
    //Metodo prueba con parametro
    pruebaParametro(prenda:string){
        return prenda;
    }

    //metodo para agregar elementos al array
    addRopa(nombre_prenda:string):Array<string>{
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    //metodo para obtener el arreglo de ropa
    getRopa():Array<string>{
        return this.coleccion_ropa;
    }

    deleteRopa(indice:number):Array<string>{
        this.coleccion_ropa.splice(indice,1);
        return this.getRopa();
    }
}