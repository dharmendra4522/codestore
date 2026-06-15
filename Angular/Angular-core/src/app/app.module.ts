import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { PipsComponent } from './pips/pips.component';
import { TrimTextPipe } from './custom-pips/trim-text.pipe';
import { CurrencyConvertorPipe } from './custom-pips/currency-convertor.pipe';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyButtonComponent } from './reuable-component/my-button/my-button.component';
import { AlertComponent } from './reuable-component/alert/alert.component';
import { ViewChieldComponent } from './view-chield/view-chield.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgcontantComponent } from './ngcontant/ngcontant.component';
import { CardComponent } from './reuable-component/card/card.component';
import { TimerComponent } from './reuable-component/timer/timer.component';
import { UserCardInputComponent } from './reuable-component/user-card-input/user-card-input.component';
import { CardInputComponent } from './card-input/card-input.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    MyButtonComponent,
    AlertComponent,
    ViewChieldComponent,
    NgcontainerComponent,
    ProductCardComponent,
    DashboardComponent,
    NgcontantComponent,
    CardComponent,
    TimerComponent,
    UserCardInputComponent,
    CardInputComponent,
    // CurrencyConvertorPipe,
    // TrimTextPipe,
    // PipsComponent,
    // CustomDirectiveComponent,
    // DirectivesComponent,
    // DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    HttpClientModule,
    DataBindingComponent,
    DirectivesComponent,
    PipsComponent,
    TrimTextPipe,
    CurrencyConvertorPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
