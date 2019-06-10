import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  private URL:string=" http://localhost:3000/products";
  
  getProducts(){
    return this.httpClient.get(this.URL).toPromise();
  }
}
