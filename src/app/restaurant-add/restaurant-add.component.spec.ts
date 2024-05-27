import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { RestaurantAddComponent } from './restaurant-add.component';
import { RestaurantService } from '../restaurant.service';
import { FormsModule } from '@angular/forms';

describe('RestaurantAddComponent', () => {
  let component: RestaurantAddComponent;
  let fixture: ComponentFixture<RestaurantAddComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockRestaurantService: jasmine.SpyObj<RestaurantService>;

  beforeEach(async(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockRestaurantService = jasmine.createSpyObj('RestaurantService', ['addRestaurant']);

    TestBed.configureTestingModule({
      declarations: [ RestaurantAddComponent ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: RestaurantService, useValue: mockRestaurantService }
      ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a restaurant and navigate to home page', () => {
    component.restaurant = { name: 'Test Restaurant', address: 'Test Address', description: 'Test Description', hours: 'Test Hours' };
    mockRestaurantService.addRestaurant.and.returnValue(of({}));

    component.addRestaurant();

    expect(mockRestaurantService.addRestaurant).toHaveBeenCalledWith(component.restaurant);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should not add a restaurant if name is empty', () => {
    component.restaurant = { name: '', address: 'Test Address', description: 'Test Description', hours: 'Test Hours' };

    component.addRestaurant();

    expect(mockRestaurantService.addRestaurant).not.toHaveBeenCalled();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
