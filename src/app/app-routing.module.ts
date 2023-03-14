import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewProductsPage } from './pages/new-products-page/new-products-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { RegisterPetPageComponent } from './pages/register-pet-page/register-pet-page.component';
import { RegisterFeederComponent } from './pages/register-feeder/register-feeder.component';
import { RegisterFeederEditComponent } from './pages/register-feeder-edit/register-feeder-edit.component';
import { CongratsPageComponent } from './pages/congrats-page/congrats-page.component';
import { MonitorPageComponent } from './pages/monitor-page/monitor-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { ProximaComidaPageComponent } from './pages/proxima-comida-page/proxima-comida-page.component';

// import { AuthGuard } from './shared/guards/auth-guard/auth.guard';

const routes: Routes = [
  // {
  //   path: 'library',
  //   component: LibraryPageComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'first',
    component: InitialPageComponent,
  },
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'new-products',
    component: NewProductsPage,
  },
  {
    path: 'signup',
    component: RegisterUserPageComponent,
  },
  {
    path: 'register-pet',
    component: RegisterPetPageComponent,
  },
  {
    path: 'register-feeder',
    component: RegisterFeederComponent,
  },
  {
    path: 'edit-feeder',
    component: RegisterFeederEditComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'congrats',
    component: CongratsPageComponent,
  },
  {
    path: 'monitor',
    component: MonitorPageComponent,
  },
  {
    path: 'notifications',
    component: NotificationsPageComponent,
  },
  {
    path: 'proxima-comida',
    component: ProximaComidaPageComponent,
  },
  {
    path: 'logout',
    component: LoginPageComponent,
  },
  { path: '**', redirectTo: 'first', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
