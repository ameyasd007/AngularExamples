import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {
  products: any[];
  IsAscending: boolean;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): any[] {
    this.productService
      .getProducts()
      .then((data: any[]) => (this.products = data))
      .catch(err => console.log(err));
    return this.products;
  }

  EditItem(id: any) {
    this.router.navigateByUrl('/createproduct?id=' + id);
  }

  RemoveItem(id: any) {
    this.productService.DeleteProduct(id).then(response => this.getProducts());
  }

  Sort(column: any) {
    if (column === 'id' || column === 'price') {
      this.products.sort((a, b) => a[column] - b[column]);
    } else {
      this.products.sort((a, b) => {
        const nameA: any = a[column].toString().toUpperCase();
        const nameB: any = b[column].toString().toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
  }

  Logout() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigateByUrl('/');
  }
}
