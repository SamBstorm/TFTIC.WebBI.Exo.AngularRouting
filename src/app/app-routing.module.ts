import { FanCreateComponent } from './components/fan-create/fan-create.component';
import { ListFanComponent } from './components/list-fan/list-fan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanDetailsComponent } from './components/fan-details/fan-details.component';
import { FanUpdateComponent } from './components/fan-update/fan-update.component';

const routes: Routes = [
  {path:'', component:ListFanComponent},
  {path:'create', component : FanCreateComponent},
  {path:'details/:fanid', component : FanDetailsComponent},
  {path:'update', component : FanUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
