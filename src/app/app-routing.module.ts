import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTourComponent} from './component/list-tour/list-tour.component';
import {AddTourComponent} from './component/add-tour/add-tour.component';
import {DeleteTourComponent} from './component/delete-tour/delete-tour.component';
import {EditTourComponent} from './component/edit-tour/edit-tour.component';


const routes: Routes = [
  {
    path: 'tour',
    // component: AppComponent,
    children: [
      {
        path: '',
        component: ListTourComponent
      },
      {
        path: 'create',
        component: AddTourComponent
      },
      {
        path: 'delete/:id',
        component: DeleteTourComponent
      },
      {
        path: 'edit/:id',
        component: EditTourComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
