import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./product/show/show.component";
import {EditComponent} from "./product/edit/edit.component";
import {CreateComponent} from "./product/create/create.component";
// import {DeleteComponent} from "./product/delete/delete.component";

const routes: Routes = [
  {path: 'show', component: ShowComponent},
  {path:'edit/:id', component: EditComponent},
  {path:'create', component: CreateComponent},
  // {path:'delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
