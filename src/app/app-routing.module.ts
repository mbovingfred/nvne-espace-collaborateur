import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollaborateursComponent } from './espace-perso/collaborateurs/collaborateurs.component';
import { VousEtesComponent } from './pages/vous-etes/vous-etes.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { MissionsEffectueComponent } from './pages/missions-effectue/missions-effectue.component';
import { PlanningComponent } from './pages/planning/planning.component';


const routes: Routes = [
  { path: '', component: ProfilComponent },
  { path: 'collaborateur/collaborateurs', component: CollaborateursComponent},
  { path: 'collaborateur/vous-etes', component: VousEtesComponent},
  { path: 'collaborateur/profil', component: ProfilComponent},
  { path: 'collaborateur/missions-effectue', component: MissionsEffectueComponent},
  { path: 'collaborateur/planning', component: PlanningComponent},
  { path: 'collaborateur/planning', component: PlanningComponent},
  // { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
