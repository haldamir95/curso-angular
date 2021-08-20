import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//MIS IMPORTACIONES
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponente } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { HomeComponente } from './home/home.component';
import { ContactoComponente } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
//para el routing
import { routing, appRoutingProviders } from './app.routing';
//para el pipe personalizado
import { ConversorPipe } from './pipes/conversor..pipe';
//import para los servicios api rest
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //Declarar mis componentes
    FrutaComponent,
    EmpleadoComponente,
    HomeComponente,
    ContactoComponente,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
