import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from "../product";
@Component({
  selector: 'stn-edit-mdform',
  templateUrl: './edit-mdform.component.html',
  styleUrls: ['./edit-mdform.component.css']
})
export class EditMdformComponent implements OnInit {

  counter: number = 0;

  id: FormControl = new FormControl();
  name: FormControl = new FormControl('', [Validators.minLength(2), Validators.required]);
  price: FormControl = new FormControl('', [Validators.required]);
  weight: FormControl = new FormControl();

  productForm: FormGroup;
  productFormObject: any;

  constructor(private builder: FormBuilder, private pService: ProductService, private router: Router) {
    this.productForm = builder.group({
      id: this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });
  }

  ngOnInit() {
    this.name.valueChanges.map(value => value.trim()).subscribe(value => this.counter = value.length);
  }

  save() {
    let product: Product = this.productForm.value;
    product.id = null;
    this.pService.addProduct(product).subscribe(() => {
      alert('Gespeichert!');
      this.router.navigate(['products']);
    });


  }

}
