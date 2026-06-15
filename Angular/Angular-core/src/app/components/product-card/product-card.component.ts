import { Component, EventEmitter, Input } from '@angular/core';
import { Product } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input({required: true}) productData!: Product;

  @Input() addToCard = new EventEmitter<number>();

  onBuyClick(){
    this.addToCard.emit(this.productData.id);
  }
}
