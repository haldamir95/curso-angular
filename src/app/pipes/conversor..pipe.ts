//importaciones para poder crear un pipe
import { Pipe, PipeTransform } from "@angular/core";

//Decorador al cual le agregamos el nombre de nuestro pipe personalizado
@Pipe(
    {
        name:'conversor'
    }
)


//Clase exportable con implementacion para nuestro Pipe
export class ConversorPipe implements PipeTransform{
    //Metodo obligatorio para todos los pipes que se creen
    //debe tener al menos un parametro que es el que se va a recibir en el componente.html
    transform(value:string, por:string):string{
        let value_one = parseInt(value);
        let value_two = parseInt(por);

        let result = "La multiplicacion: "+ value_one+" X "+value_two+" = "+ (value_one*value_two);
        //retornar el resultado de la transformacion que hace el pipe
        return result;
    }
}