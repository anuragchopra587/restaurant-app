import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  restaurant: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurantById(id).subscribe(data => {
      this.restaurant = data;
    });
  }

  updateRestaurant() {
    const id = this.route.snapshot.paramMap.get('id');
    this.restaurantService.updateRestaurant(id, this.restaurant).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}