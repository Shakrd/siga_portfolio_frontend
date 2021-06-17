// Angular Router
import {Routes} from '@angular/router';
import {AuthGuard} from '../../../shared/guards/auth.guard';
import { AsignatureComponent } from './asignature.component';


// My Components

export const AsignatureRouting: Routes = [
    {
        path: '',
        component: AsignatureComponent,
        canActivate: [AuthGuard]
    },
    
];
