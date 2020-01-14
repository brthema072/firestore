import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { MatSnackBar } from '@angular/material';
import { Product } from '../models/products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private fb: FormBuilder, private productService: ProductService, private snackBar: MatSnackBar) { }

  productForm = this.fb.group({
    id: [undefined],
    name: ['', [Validators.required]],
    stock: [0, [Validators.required]],
    price: [0, [Validators.required]]
  });

  ngOnInit() {
  }

  onSubmit(){
    let p: Product = this.productForm.value;

    if(!p.id){
      this.addProduct(p);
    }else{
      this.editProduct(p);
    }

  }

  addProduct(p: Product){
    this.productService.addProducts(p).then( ()=> {
      
      this.snackBar.open('produto adicionado', 'ok', {duration: 2000});

    }).catch(()=>{
      this.snackBar.open('errror no momento de submeter o produto', 'ok',{duration: 2000});
    })
  }
  
  editProduct(p: Product){

  }

}
