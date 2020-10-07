import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  onRegister(data: any) {
    return this.http.post('http://localhost:3005/api/v1/user/register', data);
  }
  onLogin(data: any) {
    return this.http.post('http://localhost:3005/api/v1/user/login', data);
  }
  onSendSMS(data: any) {
    return this.http.post('http://localhost:3005/api/v1/user/sendSMS',data)
  }
}
