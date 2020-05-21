import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public  positiveChange: boolean;
  public favorite: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Stock-Item';
    this.code = 'SI01';
    this.price = 90;
    this.previousPrice = 75;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }
  // Toggle the favorite property
  toggleFavorite() {
    console.log('We are toggling the favorite for this stock');
    this.favorite = !this.favorite;
  }

}
