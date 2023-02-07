import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {KioskComponent} from "./ticket/kiosk/kiosk.component";
import {CallComponent} from "./ticket/call/call.component";
import {DisplayComponent} from "./ticket/display/display.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home/home.component";
import {ConnexionComponent} from "./admin/component/connexion/connexion.component";
import { DashboardComponent } from "./admin/component/dashboard/dashboard.component";


const routes:Routes =[
  {path:'home',component:HomeComponent},
  { path:'',redirectTo:'home',pathMatch:'full'},
  {path:'ticket/kiosk',component:KioskComponent},
  {path:'ticket/callBy/:nomAcces',component:CallComponent},
  {path:'ticket/display',component:DisplayComponent,data: { nomAcces: window.location.pathname }},
  {path:'connexion',component:ConnexionComponent},
  {path:'dashboard/:nomAcces',component:DashboardComponent},
  

]

@NgModule({
  imports:[
  RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{}
