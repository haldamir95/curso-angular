import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//MIS IMPORTACIONES
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponente } from './empleado/empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    //Declarar mis componentes
    FrutaComponent,
    EmpleadoComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
