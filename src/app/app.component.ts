import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export class Product {
  name: string;
  price: number;
  description: string;
  picture: string;
  constructor(name: string, price: number, description: string, picture: string) {
    this.name = name;
    this.price = price;
    this.description = description
    this.picture = picture
  }
}
export class Cart {
  name: string;
  price: number;
  private _quantity: number = 0;

  get quantity(): number {
    return this._quantity;
  }
  set quantity(theQuantity: number) {
    this._quantity = theQuantity;
  }
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}


