import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DonatePetComponent } from './donate-pet/donate-pet.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  {path:'login-signup', component: RegisterUserComponent},
  {path :'home' , component: HomeComponent},
  {path:'donatePet', component: DonatePetComponent},
  {path: 'about', component : AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
