import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl('')
  });

  ProductID;
  ButtonName = 'Add';
  ngOnInit() {
    this.ProductID = this.route.snapshot.queryParams.id;
    console.log(this.ProductID);

    if (this.ProductID) {
      this.productService.getProducts().then((products: any[]) => {
        this.form.controls.id.setValue(
          products.find(p => p.id == this.ProductID).id
        );
        this.form.controls.name.setValue(
          products.find(p => p.id == this.ProductID).name
        );
        this.form.controls.category.setValue(
          products.find(p => p.id == this.ProductID).category
        );
        this.form.controls.price.setValue(
          products.find(p => p.id == this.ProductID).price
        );
      });
      this.ButtonName = 'Update';
    }
  }

  SaveItem() {
    if (this.ProductID) {
      this.productService
        .EditProduct(this.form.value)
        .then(response => this.router.navigateByUrl('/products'));
    } else {
      this.productService
        .AddProduct(this.form.value)
        .then(response => this.router.navigateByUrl('/products'));
    }
  }
}
