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
export class FrutaComponent{
    //como cualquier clase, se pueden agregar atributos, con visibilidad etc.
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
}