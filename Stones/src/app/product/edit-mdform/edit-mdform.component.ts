import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'stn-edit-mdform',
  templateUrl: './edit-mdform.component.html',
  styleUrls: ['./edit-mdform.component.css']
})
export class EditMdformComponent implements OnInit {

  id: FormControl = new FormControl();
  name: FormControl = new FormControl('', [Validators.required]);
  price: FormControl = new FormControl('', [Validators.minLength(2), Validators.required]);
  weight: FormControl = new FormControl();

  productForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.productForm = builder.group({
      id: this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });
   }

  ngOnInit() {
  }

  save(){
    alert(JSON.stringify(this.productForm.value));
  }

}
