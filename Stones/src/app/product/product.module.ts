import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { BruttoPipe } from './brutto.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMdformComponent } from './edit-mdform/edit-mdform.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'products', component: EditMdformComponent}
]


@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  declarations: [ProductComponent, BruttoPipe, EditProductComponent, EditMdformComponent],
  exports: [ProductComponent, EditProductComponent, EditMdformComponent]
})
export class ProductModule { }
