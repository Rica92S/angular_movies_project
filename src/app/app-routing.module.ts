import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './carrello/carrello.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AuthGuardGuard } from './services/auth.guard';


const routes: Routes = [
{path:'', component:HomeComponent, pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'catalogo', component:CatalogoComponent},
{path:'carrello', component:CarrelloComponent, canActivate:[AuthGuardGuard]},
{path:'detail/:id', component:DetailComponent},
{path:'contatti', component:ContattiComponent},
{path:'login', component:LoginComponent},
{path:'registrazione', component:RegistrazioneComponent},


// {path:'**', component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
