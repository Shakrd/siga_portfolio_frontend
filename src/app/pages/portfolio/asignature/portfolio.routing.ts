
import {Routes} from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { PortfolioComponent } from '../portfolio.component';



export const PortfolioRoutes: Routes = [
    {
        path: 'portfolio',
        component: PortfolioComponent,
        canActivate: [AuthGuard]
        
    }
];
