import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  val: number = 2.5;
  val1: number = 4;
  val2: number = 2;
  val3: number = 5;
  val4: number = 2;
  val5: number = 3;
  val6: number = 4;
  val7: number = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
