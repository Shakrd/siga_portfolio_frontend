import { PortfolioRoutes } from './portfolio.routing.module';





import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { TabMenuModule } from 'primeng/tabmenu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//primeNG
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    PortfolioComponent,


  ],
  imports: [

    CommonModule,
    RouterModule.forChild(PortfolioRoutes),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    TooltipModule,
    AutoCompleteModule,
    ToastModule,
    DialogModule,
    TooltipModule,
    RippleModule,
    TabMenuModule,
  ],

  providers: []

})
export class PortfolioModule { }
