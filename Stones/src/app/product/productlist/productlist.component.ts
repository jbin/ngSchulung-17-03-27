import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'stn-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Observable<Array<Product>>;

  constructor(private pService: ProductService) { }

  ngOnInit() {
    this.productList = this.pService.getList();
  }

}
