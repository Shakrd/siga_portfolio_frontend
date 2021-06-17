
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { PortfolioComponent } from 'src/app/pages/portfolio/portfolio.component';




@NgModule({
  declarations: [
    PortfolioComponent,
    
  ],
  imports: [
    CommonModule,
    TabMenuModule
  
    
  ]
})
export class PortfolioModule { }
