import { Component } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  worker?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  productList: Product[] = [
    { id: 1, name: 'Product 1', price: 10, worker: 'John Doe' },
    { id: 2, name: 'Product 2', price: 20, worker: 'Jane Smith' },
    { id: 3, name: 'Product 3', price: 30, worker: 'Bob Johnson' }
  ];

  selectedProductId: number | null = null;

  handleCartAddition(productId: number) {
    this.selectedProductId = productId;
    console.log(`Parent received action signal! Added Product ID ${productId} to global cart store.`);
  }

}
