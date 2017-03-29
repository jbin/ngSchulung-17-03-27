import { Injectable } from '@angular/core';
import { Product } from "./product";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs';

@Injectable()
export class ProductService {
  constructor(private http: Http) { }

  getList(): Observable<Array<Product>> {
    return this.http.get('http://ec2-35-157-141-170.eu-central-1.compute.amazonaws.com:8080/api/products')
      .map(products => products.json());
  }

  addProduct(product: Product): Observable<any> { 
    return this.http.post('http://ec2-35-157-141-170.eu-central-1.compute.amazonaws.com:8080/api/products', product);
  }

}


@Injectable()
export class MockProductService {
  getList(): Observable<Array<Product>> {
    const list: Array<Product> = [new Product(0, 'test', 1, 2)];
    return Observable.of(list);
  }
}
