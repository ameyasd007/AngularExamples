import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {

  products:any[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts():any[]{
    this.productService.getProducts().then((data:any[])=>this.products = data).catch(err=>console.log(err));
    return this.products;
  }
}
