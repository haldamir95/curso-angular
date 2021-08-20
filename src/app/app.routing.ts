import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Empleado } from "./empleado/empleado";

//IMPORTACION DE COMPONENTES
import { EmpleadoComponente } from "./empleado/empleado.component";
import { FrutaComponent } from "./fruta/fruta.component";
import { HomeComponente } from './home/home.component';
import { ContactoComponente } from './contacto/contacto.component';
import { CochesComponent } from "./coches/coches.component";
import { PlantillasComponent } from "./plantillas/plantillas.component";

//la variable appRoutes es un array de Routes que estara compuesto
//de varios json los cuales definiran las rutas
const appRoutes:Routes = [
    //path: Direccion url que se debe poner
    //component: El componente que se cargara al utilizar esa ruta
    {path: '', component: HomeComponente},

    {path: 'empleado', component: EmpleadoComponente},
    {path: 'fruta', component:FrutaComponent},
    {path: 'pagina-principal', component: HomeComponente},
    {path: 'contacto', component:ContactoComponente},
    {path: 'contacto/:page', component:ContactoComponente},
    {path: 'coches', component:CochesComponent},
    {path: 'plantillas', component:PlantillasComponent},
    //el path '**' es para atrapar errores y mostrar un componente
    //en caso de que cualquier otra ruta falle
    {path: '**', component: HomeComponente}
];

//esta exportacion se utiliza unicamente para que Angular instancie el Provider
export const appRoutingProviders: any[] = [];

//esta exportacion se utiliza para indicar en que variable se encuentra el arreglo de rutas
//ModuleWithProviders<any>
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);