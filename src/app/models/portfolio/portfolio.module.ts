
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import {TabMenuModule} from 'primeng/tabmenu';





@NgModule({
  declarations: [
    PortfolioComponent,
    
  ],
  imports: [
    CommonModule,
    TabMenuModule,
  ]
})
export class PortfolioModule { }
