import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { DonatePetComponent } from './donate-pet/donate-pet.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PetManagementComponent } from './pet-management/pet-management.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login-signup', component: RegisterUserComponent},
  {path :'home' , component: HomeComponent},
  {path:'donatePet', component: DonatePetComponent},
  {path: 'about', component : AboutComponent},
  {path:'management' , component:PetManagementComponent},
  {path:'chat' , component:ChatComponent},
  {path: '**' , component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
