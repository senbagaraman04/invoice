import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface BillingInterface {
  no: number;
  name: string;
  date: string;
  product: string;
  quantity: number;
  rate: number;
  total?: number;
}

const billingData: BillingInterface[] = [
  {no: 1, name: 'Manoharan', date: '12-12-20', product: 'Coconut Oil', quantity: 5, rate: 23 },
  {no: 2, name: 'Aruna', date: '13-12-20', product: 'Tree Oil', quantity: 9, rate:53 },
  {no: 3, name: 'Senbagaraman', date: '14-12-20', product: 'Vanaspathi Oil', quantity: 12, rate: 73 },
  {no: 4, name: 'Sreekanth', date: '15-12-20', product: 'Ghee ', quantity: 12, rate: 34 },
  {no: 5, name: 'Aswin', date: '16-12-20', product: 'Gingley Oil', quantity: 6, rate: 23 },
  {no: 6, name: 'Balaji', date: '14-12-20', product: 'Gingley Oil', quantity: 3, rate: 3 },
  {no: 7, name: 'Mano', date: '12-01-21', product: 'Oil', quantity: 12, rate: 93 },
];

@Component({
  selector: 'app-billing-history',
  templateUrl: './billing-history.component.html',
  styleUrls: ['./billing-history.component.scss']
})
export class BillingHistoryComponent implements OnInit {
 // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['no', 'name', 'date', 'product', 'quantity', 'rate', 'total'];
  dataSource = new MatTableDataSource(billingData);
  constructor() { }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
