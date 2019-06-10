import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  private URL:string="http://localhost:3000/users";

  getUsers(){
    return this.httpClient.get(this.URL).toPromise();
  }
}
