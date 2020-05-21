import { Component, OnInit } from '@angular/core';
import { Stock } from '../../entities/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock1 = new Stock('Item 1', 'SI01', 90, 75, 0, true);
  public stock2 = new Stock('Item 2', 'SI02', 76, 80, 0, true);
  public stocks: Stock[] = [
    this.stock1,
    this.stock2
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.stock1.isPositiveChange());
    console.log(this.stock2.isPositiveChange());
  }

  // Toggle the favorite property
  toggleFavorite(event) {
    console.log('We are toggling the favorite for this stock', event);
    event.favorite = !event.favorite;
  }

  // Increase number of items
  increaseItems(event) {
    event.quantity++;
    if (event.quantityCheck) {
      event.quantityCheck = false;
    }
  }

  // Decrease the number of items
  decreaseItems(event): boolean {
    if (event.quantity > 0) {
      event.quantity--;
      if (event.quantity === 0) {
        event.quantityCheck = true;
      }
    }
    else {
      event.quantityCheck = true;
    }
    return event.quantityCheck;
  }

}
