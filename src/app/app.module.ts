import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { CollaborateursComponent } from './espace-perso/collaborateurs/collaborateurs.component';
import { AdminDatatableComponent } from './comps/admin-datatable/admin-datatable.component';
import { NvneBtnComponent } from './comps/nvne-btn/nvne-btn.component';
import { NvneBtnOComponent } from './comps/nvne-btn-o/nvne-btn-o.component';
import { NvneInputTextComponent } from './comps/nvne-input-text/nvne-input-text.component';
import { NvneCheckboxComponent } from './comps/nvne-checkbox/nvne-checkbox.component';
import { NvneBtnIcoComponent } from './comps/nvne-btn-ico/nvne-btn-ico.component';
import { NvneRoundedPicComponent } from './comps/nvne-rounded-pic/nvne-rounded-pic.component';
import { NvneRoundedPicWithStatusComponent } from './comps/nvne-rounded-pic-with-status/nvne-rounded-pic-with-status.component';
import { NvneRoundedPicWithIcoComponent } from './comps/nvne-rounded-pic-with-ico/nvne-rounded-pic-with-ico.component';
import { NvneListMissionItemComponent } from './comps/nvne-list-mission-item/nvne-list-mission-item.component';
import { VousEtesComponent } from './pages/vous-etes/vous-etes.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { MissionsEffectueComponent } from './pages/missions-effectue/missions-effectue.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { NvneStepCircleComponent } from './comps/nvne-step-circle/nvne-step-circle.component';
import { NvneInputComponent } from './comps/nvne-input/nvne-input.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { NvneOptionPickerComponent } from './comps/nvne-option-picker/nvne-option-picker.component';
import { registerLocaleData } from '@angular/common';
import localeFR from "@angular/common/locales/fr";
import { MissionsComponent } from './pages/missions/missions.component';
import { RequestInterceptorService } from './services/security/request-interceptor.service';
import { NvneInputFileComponent } from './comps/nvne-input-file/nvne-input-file.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
registerLocaleData(localeFR, "fr");

export function kcFactory(kcSecurity:KeycloakSecurityService){
  return ()=> kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    MyFooterComponent,
    NavbarComponent,
    CollaborateursComponent,
    AdminDatatableComponent,
    NvneBtnComponent,
    NvneBtnOComponent,
    NvneInputTextComponent,
    NvneCheckboxComponent,
    NvneBtnIcoComponent,
    NvneRoundedPicComponent,
    NvneRoundedPicWithStatusComponent,
    NvneRoundedPicWithIcoComponent,
    NvneListMissionItemComponent,
    VousEtesComponent,
    ProfilComponent,
    MissionsEffectueComponent,
    PlanningComponent,
    NvneStepCircleComponent,
    NvneInputComponent,
    NvneInputFileComponent,
    NvneOptionPickerComponent,
    MissionsComponent,
    NvneInputFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule, FontAwesomeModule
  ],
  providers: [
    {provide:APP_INITIALIZER, deps:[KeycloakSecurityService], useFactory:kcFactory, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:RequestInterceptorService, multi:true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
