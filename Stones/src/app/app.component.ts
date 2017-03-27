import { Component } from '@angular/core';
import { Product } from "./product/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!?';
  productApp: Product = new Product(0, 'name', 12, 543);

  onPriceChange(price) {
    alert(price);
  }
}
