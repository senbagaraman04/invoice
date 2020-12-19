import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-overview-details',
  templateUrl: './overview-details.component.html',
  styleUrls: ['./overview-details.component.scss']
})

export class OverviewDetailsComponent implements OnInit {


  totalOrders = 10;
  totalGinglyOil = 23.4;
  totalCastorOil = 22.3;
  totalCoconutOil = 92.3;

   groundnutOilPrice =  243.3;
   gingelyOilPrice  = 323.8;
   coconutPriceOil  = 4874.3;

   coconutStockOil  = 32;
   gingelyStockOil  = 34;
   groundnutStockOil  = 45;


  constructor() { }

  ngOnInit() {
  }

}
