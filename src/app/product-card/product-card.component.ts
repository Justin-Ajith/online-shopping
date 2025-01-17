import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() addToCardEvent = new EventEmitter<any>();

  addToCard(productData: any) {
    if(productData.inStock) {
      this.addToCardEvent.emit(productData)
    } else {
      alert("Out of Stock")
    }

  }
}
