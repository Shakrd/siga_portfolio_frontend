import { AuthGuard } from './../shared/guards/auth.guard';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioModule } from './portfolio.module';
import {Routes} from '@angular/router';



export const PortfolioRoutes: Routes = [
    {
        path: 'portfolio',
        component: PortfolioComponent,
        canActivate: [AuthGuard]
        
    }
];
