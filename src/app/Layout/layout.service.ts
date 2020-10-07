import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http:HttpClient) {

  }
  showProduct(){
    return this.http.get('http://localhost:3005/api/v1/admin/product');
  }
  registerUser(data:any){
    return this.http.post('http://localhost:3005/api/v1/user/register',data);
  }
  registerBasket(data:any){
    return this.http.post('http://localhost:3005/api/v1/user/basket',data);
  }
}
