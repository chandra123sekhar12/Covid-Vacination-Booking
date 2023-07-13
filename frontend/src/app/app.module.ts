import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LocationComponent } from './location/location.component';
import { CenterComponent } from './center/center.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { Toolbar1Component } from './toolbar1/toolbar1.component';
import { Toolbar2Component } from './toolbar2/toolbar2.component';
import { Toolbar3Component } from './toolbar3/toolbar3.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedService } from './shared.service';
import { DeleteCenterComponent } from './delete-center/delete-center.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { BookingsComponent } from './bookings/bookings.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LocationComponent,
    CenterComponent,
    HospitalComponent,
    AddCenterComponent,
    Toolbar1Component,
    Toolbar2Component,
    Toolbar3Component,
    ProfileComponent,
    DeleteCenterComponent,
    MainComponent,
    AdminComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
