import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { RestaurantDetailComponent } from './restaurant-detail.component';
import { RestaurantService } from '../restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StarRatingComponent } from '../star-rating/star-rating.component';

describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let restaurantService: jasmine.SpyObj<RestaurantService>;

  beforeEach(async () => {
    const restaurantServiceSpy = jasmine.createSpyObj('RestaurantService', ['getRestaurantById', 'rateRestaurant']);
    restaurantServiceSpy.getRestaurantById.and.returnValue(of({ name: 'Test Restaurant' }));
    restaurantServiceSpy.rateRestaurant.and.returnValue(of({ id: '1', name: 'Test Restaurant', rating: 5 }));
    await TestBed.configureTestingModule({
      declarations: [RestaurantDetailComponent, StarRatingComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: RestaurantService, useValue: restaurantServiceSpy }
      ],
      imports: [HttpClientModule, RouterTestingModule]
    }).compileComponents();

    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
    restaurantService = TestBed.get(RestaurantService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch restaurant details on initialization', () => {
    expect(component.restaurant).toEqual({ name: 'Test Restaurant' });
  });

  it('should navigate to base url when goBack is called', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should rate restaurant and show alert', () => {
    const alertSpy = spyOn(window, 'alert');
    component.rateRestaurant(5);
    expect(restaurantService.rateRestaurant).toHaveBeenCalledWith('1', 5);
    expect(component.restaurant).toEqual({ id: '1', name: 'Test Restaurant', rating: 5 });
    expect(alertSpy).toHaveBeenCalledWith('Your rating has been submitted.');
  });
});
