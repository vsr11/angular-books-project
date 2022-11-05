import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HederComponent } from './heder/heder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FooterComponent,
    HederComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
 exports: [
    FooterComponent,
    HederComponent
 ] 
})
export class CoreModule { }
