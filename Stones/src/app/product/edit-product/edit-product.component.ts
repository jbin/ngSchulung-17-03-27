import { Component, OnInit } from '@angular/core';
import { Product } from "../product";

@Component({
  selector: 'stn-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(product: Product) {
    alert(JSON.stringify(product));
  }

}
