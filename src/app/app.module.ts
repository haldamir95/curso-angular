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
//para el routing
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    //Declarar mis componentes
    FrutaComponent,
    EmpleadoComponente,
    HomeComponente,
    ContactoComponente,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
