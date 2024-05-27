import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'https://b44d4dkz9a.execute-api.ap-southeast-2.amazonaws.com/prod/restaraunt';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getRestaurantById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addRestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, restaurant);
  }

  updateRestaurant(id: string, restaurant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, restaurant);
  }

  deleteRestaurant(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  rateRestaurant(id: string, rating: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/updateRating`, { rating });
  }
}
