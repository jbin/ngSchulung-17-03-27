import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistComponent } from './productlist.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProductService, MockProductService } from "../product.service";
import { HttpModule } from "@angular/http";
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import { ProductComponent } from "../product/product.component";
import { BruttoPipe } from "../brutto.pipe";

describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductlistComponent, ProductComponent, BruttoPipe],

      providers: [{ provide: ProductService, useClass: MockProductService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.productList.subscribe((val) => expect(val[0].id).toEqual(0));
});
});
