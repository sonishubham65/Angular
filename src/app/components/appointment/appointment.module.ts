import { NgModule }       from '@angular/core';

import { RouterModule, Routes,CanActivate } from '@angular/router';
import {CommonModule } from '@angular/common';
import { AuthGuardService } from '../../app.auth.gaurd.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/**
 * Components defination
 */
import { ListComponent } from '../../components/appointment/list/list.component';
import { DetailComponent } from '../../components/appointment/detail/detail.component';
import { CreateComponent } from '../../components/appointment/create/create.component';

/**
 * Resolver
 */
import { ListResolver, DetailResolver, OrdersResolver } from './appointment.resolver';
import { OrderComponent } from './order/order.component';

/**
 * Define routes
 */
const routes: Routes = [
    { 
        path: 'list', 
        component: ListComponent,
        canActivate: [AuthGuardService],
        resolve:{ restaurants:ListResolver },
        children: [{ 
            path: 'detail/:ID', 
            component: DetailComponent,
            resolve:{restaurant:DetailResolver},
            outlet:'details'
        }],
    },
    {
        path: 'orders', 
        component: OrderComponent,
        canActivate: [AuthGuardService],
        resolve:{ restaurants:OrdersResolver },
        
    },
    { 
        path: 'create', 
        component: CreateComponent
    }
    
];

@NgModule({
    /**
     * Components declartion
     */
    declarations:[
        CreateComponent,
        ListComponent,
        DetailComponent,
        OrderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule
    ],
    providers : [
        ListResolver,
        DetailResolver,
        OrdersResolver
    ]
})
export class AppointmentModule {

}