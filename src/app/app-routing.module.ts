import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BooksRoutingModule } from './books/books-routing.molule';
import { isNotLoggedInGuard } from './shared/guards/is-not-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books/books-list',
  },
  { path: 'books', loadChildren: () => BooksRoutingModule },
  {
    path: 'login',
    canActivate: [isNotLoggedInGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [isNotLoggedInGuard],
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
