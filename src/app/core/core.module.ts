import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HederComponent } from './heder/heder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AsideComponent } from './aside/aside.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    HederComponent,
    NotFoundComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
 exports: [
    FooterComponent,
    HederComponent,
    AsideComponent
 ] 
})
export class CoreModule { }
