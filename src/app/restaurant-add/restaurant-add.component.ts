import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent {
  restaurant = {
    name: '',
    address: '',
    description: '',
    hours: ''
  };

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  addRestaurant() {
    if(this.restaurant.name){
        this.restaurantService.addRestaurant(this.restaurant).subscribe(() => {
          this.router.navigate(['/']);
        });
    }
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
}
