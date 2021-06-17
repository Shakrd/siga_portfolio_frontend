
import { NgModule, Component } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';


// Application Components
import { AppMainComponent } from './shared/components/main/app.main.component';
import { AppBlankComponent } from './shared/components/blank/app.blank.component';

// Application Guards
import { AuthGuard } from './shared/guards/auth.guard';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'pea', component: PortfolioComponent,
                children: [
                     //{ path: '', redirectTo: '/pea', pathMatch: 'full' },
                   /*  {
                        path: 'dashboard',
                        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
                        canActivate: [AuthGuard]
<<<<<<< HEAD
                    }, */ 
=======
                    },
<<<<<<< HEAD
                    /*{
                        path: 'user',
                        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
                        canActivate: [AuthGuard]
                    }*/
=======
>>>>>>> main
                    /* {
                        path: 'pea',
                        loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule),
                        canActivate: [AuthGuard]
<<<<<<< HEAD
                    } */
=======
<<<<<<< HEAD
                    } */
>>>>>>> 66d87adf4bdf40cd447e452dcdd9ca0bfb8229f8
=======
                    } 
>>>>>>> 1f52e1f6c05c76e3eaef80240249ad34748ee4dd
>>>>>>> main
                ]
            },
            /* {
                path: 'pea-web',
                component: AppBlankComponent,
                loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
            }, */
             /* {
                path: 'auth',
                component: AppBlankComponent,
                loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
            },  */

           // { path: '**', redirectTo: '/auth/not-found' },
        ],
            {

                scrollPositionRestoration: 'enabled'
            })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
