import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';

const routes: Routes = [
  { path: '', component: RestaurantListComponent },
  { path: 'restaurant/:id', component: RestaurantDetailComponent },
  { path: 'add-restaurant', component: RestaurantAddComponent },
  { path: 'edit-restaurant/:id', component: RestaurantEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
