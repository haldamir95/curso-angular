//inportar el modelo injectable para permitir la inyeccion de peticiones y el decorador injectable

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
//import { Http, Response, Headers} from "@angular/common/http";
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

//Crear decorador vacio
@Injectable()


//crear clase exportable
export class PeticionesService{

    //crear url del api que vamos a consumir
    public url!:string;

    constructor(
        //variable tipo http
        private _http:HttpClient
    ){
        //asignar la URL que utilizaremos
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return 'Hola mundo, prueba de servicio';
    }

    getArticulos(){
        //utilizando el HTTPCLIENT tenemos los metodos get, post etc..
        //para obtener el resultado del API utilizamos el map y una funcion flecha
        return this._http.get(this.url).pipe(map(res => res));
    }
}