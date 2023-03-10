import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewProductsPage } from './pages/new-products-page/new-products-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';

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
    path: 'login',
    component: LoginPageComponent,
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
