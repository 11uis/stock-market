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
  public stockClasses;

  constructor() { }

  ngOnInit() {
    this.stocksPriceChange();
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

  // Calculate the difference between origian and current price
  priceChange(stock) {
    let diff = (stock.price / stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.05;
    this.stockClasses = {
      "positive": stock.isPositiveChange(),
      "negative": !stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    };
  } // End of priceChange(...)

  // Call priceChange for all the stocks in stocks array
  stocksPriceChange() {
    for ( let i = 0; i < this.stocks.length; i++) {
      this.priceChange(this.stocks[i]);
    }
  } // End of stocksPriceChange()

}
