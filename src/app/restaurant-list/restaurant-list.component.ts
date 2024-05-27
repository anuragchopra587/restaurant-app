import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private router: Router,
    private restaurantService: RestaurantService) {}

  ngOnInit() {
    debugger;
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }
  navigateToDetailPage(restaurantId: string) {
    this.router.navigate(['/restaurant', restaurantId]);
  }

  navigateToAddRestaurant() {
    this.router.navigate(['/add-restaurant']);
  }
  
  navigateToEditPage(restaurantId: string) {
    this.router.navigate(['/edit-restaurant', restaurantId]);
  }

  deleteRestaurant(restaurantId: string) {
    const confirmDeletion = window.confirm('Are you sure you want to delete this restaurant?');
    if (confirmDeletion) {
      this.restaurantService.deleteRestaurant(restaurantId).subscribe(() => {
        this.restaurants = this.restaurants.filter(r => r.id !== restaurantId);
      });
    }
  }
}
