import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from './models/products.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //chamada para o banco do firebase
  private productsCollections: AngularFirestoreCollection<Product> = this.afs.collection('products');

  constructor(private afs: AngularFirestore) { }

  getProducts(): Observable<Product[]>{
    return this.productsCollections.valueChanges();
  }

  addProducts(p: Product){
    return this.productsCollections.add(p);
  }
}
