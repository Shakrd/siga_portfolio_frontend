
import { NgModule, Component } from '@angular/core';


import {Routes, RouterModule} from '@angular/router';


// Application Components
import {AppMainComponent} from './shared/components/main/app.main.component';
import {AppBlankComponent} from './shared/components/blank/app.blank.component';

// Application Guards
import {AuthGuard} from './shared/guards/auth.guard';
import { PortfolioComponent } from 'src/portfolio/portfolio.component';


const routes: Routes = [
    { path: 'portfolio', component: PortfolioComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)
    
    
    ],
    exports: [RouterModule]
  })




/* @NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
                        canActivate: [AuthGuard]
                    },
                    /* {
                        path: 'user',
                        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
                        canActivate: [AuthGuard]
                    } 
                ]
            },
            {
                path: 'auth',
                component: AppBlankComponent,
                loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
            },
            {path: '**', redirectTo: '/auth/not-found'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
}) */
export class AppRoutingModule {
}
