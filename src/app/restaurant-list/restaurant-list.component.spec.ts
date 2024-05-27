import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantListComponent } from './restaurant-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingComponent } from '../star-rating/star-rating.component';

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantListComponent, StarRatingComponent],
      imports:[RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
