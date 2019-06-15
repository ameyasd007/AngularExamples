import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private URL = 'http://localhost:3000/products';

  getProducts() {
    return this.httpClient.get(this.URL).toPromise();
  }

  AddProduct(product: any) {
    return this.httpClient.post(this.URL, product).toPromise();
  }

  DeleteProduct(id: any) {
    return this.httpClient.delete(this.URL + '/' + id).toPromise();
  }

  EditProduct(product: any) {
    return this.httpClient
      .patch(this.URL + '/' + product.id, product)
      .toPromise();
  }
}
