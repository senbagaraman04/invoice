import { Component, OnInit} from '@angular/core';
 


@Component({
  selector: 'app-overview-details',
  templateUrl: './overview-details.component.html',
  styleUrls: ['./overview-details.component.scss']
})

export class OverviewDetailsComponent implements OnInit {

  
  totalOrders: number = 10;
  totalGinglyOil: number = 23.4;
  totalCastorOil: number = 22.3;
   totalCoconutOil : number = 92.3;

   castorOilPrice: number =  243.3;
   gingelyOilPrice: number = 323.8;
   coconutPriceOil: number = 4874.3;



   coconutStockOil : number = 32;
   gingelyStockOil: number = 34;
   castorStockOil: number = 45;

   
  constructor() { }

  ngOnInit() {
  
  }
 


}
