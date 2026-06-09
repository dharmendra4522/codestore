import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DirectivesComponent,
    // DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    DataBindingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
