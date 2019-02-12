import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { 
        path: 'restaurant',
        loadChildren: './components/appointment/appointment.module#AppointmentModule',
    }
]
@NgModule({
    declarations:[
        HomeComponent,
        LoginComponent,
    ],
    imports: [
        RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload', enableTracing: false }),
        
    ],
    exports: [RouterModule],
    providers : [
        
    ]
})
export class AppRouteModule {

}