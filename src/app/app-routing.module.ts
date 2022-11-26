import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BooksRoutingModule } from './books/books-routing.molule';
import { isLoggedInGuard } from './shared/guards/is-logged-in.guard';
import { isAdminGuard } from './shared/guards/is-admin.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books/books-list'
  },
  {path:'books',
    loadChildren:()=>BooksRoutingModule
    // loadChildren: "app/components/books/books.module#BooksModule"
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate:[isLoggedInGuard]
    },
    {
    path: 'register',
    component: RegisterComponent,
    // canActivate:[isLoggedInGuard]
         },
    {
     path: '**',
     component: NotFoundComponent
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { onSameUrlNavigation:'reload' }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
