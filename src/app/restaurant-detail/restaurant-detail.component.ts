import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurantById(id).subscribe((data) => {
      this.restaurant = data;
    },
    (error) => {
      console.error('Error fetching restaurant details:', error);
    });
  }

  rateRestaurant(rating: number) {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurantService.rateRestaurant(id, rating).subscribe((data) => {
      this.restaurant = data;
      alert('Your rating has been submitted.');
    },
    (error) => {
      console.error('Error rating restaurant:', error);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
