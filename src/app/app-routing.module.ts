import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: AppComponent,
  children:[
    { path: '', redirectTo : 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent} 
  ]
},

{
  path: 'admin', component: DashboardComponent,
children:[   
  // {path: 'vehicledetails', component: VehicleDetailsComponent},
  //  {path: 'chart', component: ChartComponent},
  //  {path: 'driver', component: DriverDetailsComponent},
  //  {path: 'terms', component: TermsComponent},
  //  {path: 'about', component: AboutusComponent },
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
