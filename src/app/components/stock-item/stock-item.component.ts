import { Component, OnInit } from '@angular/core';
import { Stock } from '../../entities/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Stock-Item', 'ST01', 90, 75);
  }
  // Toggle the favorite property
  toggleFavorite(event) {
    console.log('We are toggling the favorite for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
