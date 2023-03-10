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
    NewProductsPage,
    InputComponent,
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
