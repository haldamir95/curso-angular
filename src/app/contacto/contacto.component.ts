import { Component } from "@angular/core";

//Importar estos modulos para la obtencion de parametros
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component(
    {
        selector: 'contacto',
        templateUrl: './contacto.component.html'
    }
)


export class ContactoComponente{
    public titulo:string = 'Pagina de Contacto de la Web';

    //Angular pide que las variables esten inicializadas, pero si no se desea inicializar, se pueden hacer dos cosas
    //1.    ir al archivo tsconfig.json y buscar "strictPropertyInitialization": false
    //2.    agregar ! despues del nombre de la variable
    public parametro!:string;

    //crear el constructor con estos parametros para poder recibir parametros de las rutas url
    constructor(
        private _route:ActivatedRoute,
        private _router:Router
    ){

    }

    //utilizar el metdoo ngOnInit para ejecutar la lectura de parametros
    ngOnInit(){

        //recorrer todos los parametros con un foreach que provee el modulo _route:ActivateRoute
        //utilizar una funcion de callback para atrapar el parametro
        //en el video 33 del curso muestran
        /*
            this._route.params.forEach(function(params: Params) {
                this.parametro = params['page'];
            });
        */
        //Pero esto da un error, asi que se cambio el
        //      function(params: Params) por params => o por (params : Params) =>
        //que segun las sugerencias de Visual Code es lo mismo
        this._route.params.forEach((params : Params) => {
            this.parametro = params['page'];
        });
        console.log('EL PARAMETRO: '+this.parametro);
    }

    redirigir(){
        this._router.navigate(['/contacto','Parametro_Redirigido']);
    }

    redirigirHome(){
        this._router.navigate(['/pagina-principal']);
    }
}