import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private  http:HttpClient) { }
  uploadFile(image:any) {
    return this.http.post('http://localhost:3005/api/v1/admin/image', image);
  }
  onRegisterProduct(data:any){
    return this.http.post('http://localhost:3005/api/v1/admin/product', data);
  }
  onDisplayProduct(){
    return this.http.get('http://localhost:3005/api/v1/admin/product');
  }
  onRegisterSlider(data:any){
    return this.http.post('http://localhost:3005/api/v1/admin/slider', data);
  }
  onDisplaySlider(){
    return this.http.get('http://localhost:3005/api/v1/admin/slider');
  }
}
