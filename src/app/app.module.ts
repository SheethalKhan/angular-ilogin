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
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const route: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: OginComponent },
  { path: 'list', component: ListComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    OginComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
