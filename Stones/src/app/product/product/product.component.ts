import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product(0, 'name', 12, 543);

  constructor() { }

  ngOnInit() {
  }

  raisePrice() {
    this.product.price += 5;
    alert(this.product.price);
  }

}