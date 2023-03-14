import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './molecules/side-bar/side-bar.component';
import { HeaderComponent } from './organisms/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './templates/layout/layout.component';
import { LinksListComponent } from './molecules/links-list/links-list.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { NewProductsPage } from './pages/new-products-page/new-products-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InputComponent } from './atoms/input/input.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { RegisterPetPageComponent } from './pages/register-pet-page/register-pet-page.component';
import { RegisterFeederComponent } from './pages/register-feeder/register-feeder.component';
import { RegisterFeederEditComponent } from './pages/register-feeder-edit/register-feeder-edit.component';
import { CongratsPageComponent } from './pages/congrats-page/congrats-page.component';
import { MonitorPageComponent } from './pages/monitor-page/monitor-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { ProximaComidaPageComponent } from './pages/proxima-comida-page/proxima-comida-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksListComponent,
    SideBarComponent,
    LayoutComponent,
    HomePageComponent,
    WelcomePageComponent,
    InitialPageComponent,
    LoginPageComponent,
    RegisterPetPageComponent,
    RegisterFeederComponent,
    RegisterFeederEditComponent,
    NewProductsPage,
    InputComponent,
    CongratsPageComponent,
    MonitorPageComponent,
    NotificationsPageComponent,
    ProximaComidaPageComponent,
    RegisterUserPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
