import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClientService } from '../inventory-panel/http-client.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss']
})
export class ViewInventoryComponent implements OnInit {

  constructor(private httpService: HttpClientService) { }
  
  stockData: stockListInterface;
  stockDate: Date;
  ngOnInit() {
    this.httpService.get("/stocks").subscribe(res => {
      //console.log(res);
      this.updateTable(res.data[0]);
    })
  }
  updateTable(data: stockListInterface) {
    console.log(data);
   this.stockData = data;
   this.stockDate = new Date(data.dateOfEntry);
  }

  

}



export interface stockListInterface {
  id: number;
  groudNutOnelt: number;
  groudNuthalflt: number;
  sesameOnelt: number;
  sesamehalflt: number;
  coconutOnelt: number;
  coconuthalflt: number;
  dateOfEntry: Date;
  organicJaggeryOnekg: number;
  organicJaggeryHalfkg: number;
  originalJaggeryOnekg: number;
  originalJaggeryHalfkg: number;

}
