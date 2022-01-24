import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
///import { ToastrModule } from 'ngx-toastr';
import { Route, Router, RouterModule, Routes } from '@angular/router';
//import { Route } from '@angular/compiler/src/core';
import { OginComponent } from './ogin/ogin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
const route: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: OginComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    MatToolbarModule
  ],
  declarations: [AppComponent, HelloComponent,OginComponent,FooterComponent,HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
