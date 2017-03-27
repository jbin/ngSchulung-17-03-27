import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product ;
  @Output() priceChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() productChange: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  changePrice(price: number) {
    this.product.price = price;
    this.priceChange.emit(this.product.price);
    this.productChange.emit(this.product);
  }

}
