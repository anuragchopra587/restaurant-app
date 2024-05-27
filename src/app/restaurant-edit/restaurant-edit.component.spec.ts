import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RestaurantEditComponent } from './restaurant-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('RestaurantEditComponent', () => {
  let component: RestaurantEditComponent;
  let fixture: ComponentFixture<RestaurantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantEditComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
