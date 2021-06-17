
// Angular Router
import {Routes} from '@angular/router';
import {AuthGuard} from '../../shared/guards/auth.guard';


// My Components

export const PortfolioRoutes: Routes  = [
    {
        path: '',
        children: [
            {
                path: 'asignature',
                loadChildren: () => import('./asignature/asignature.module').then(m => m.AsignatureModule),
                
            },
             /* {
                path: 'company',
                loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
                canActivate: [AuthGuard]
            },  */
            /* {
                path: 'web',
                loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule),
            }, */
        ]
    }
];
