import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LocationComponent } from './location/location.component';
import { CenterComponent } from './center/center.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { DeleteCenterComponent } from './delete-center/delete-center.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"location",component:LocationComponent},
  {path:"center",component:CenterComponent},
  {path:"hospital",component:HospitalComponent},
  {path:"add",component:AddCenterComponent},
  {path:"delete",component:DeleteCenterComponent},
  {path:"main",component:MainComponent},
  {path:"admin",component:AdminComponent},
  {path:"booking",component:BookingsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
