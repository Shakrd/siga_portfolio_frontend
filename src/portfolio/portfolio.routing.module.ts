import { PortfolioComponent } from './portfolio.component';
import { PortfolioModule } from './portfolio.module';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'pea', component: PortfolioComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class PortfolioRoutingModule { }


