import { Component, OnInit } from '@angular/core';
import { AddInvoiceService } from '../../service/addinvoice.service';
import { stockListInterface } from '../../shared/stockList.interface';
@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss']
})
export class ViewInventoryComponent implements OnInit {

  constructor(private httpService: AddInvoiceService) { }

  stockData: stockListInterface;
  stockDate: Date;
  ngOnInit() {

    // TODO: update the code to get only one value from the DB to reduce performance impact
    this.httpService.get('/stocks').subscribe(res => {
      console.log(res);
      this.updateTable(res.data);
    });
  }
  updateTable(data ) {
    console.log(data);
    data.forEach(receivedData => {

      const dates = new Date();
      dates.setDate(dates.getDate() - 1);
      if (new Date(receivedData.dateOfEntry).toLocaleDateString() === new Date().toLocaleDateString()) {
        this.stockData = receivedData;
        this.stockDate = new Date(receivedData.dateOfEntry);
      } else if (dates.toLocaleDateString() === new Date(receivedData.dateOfEntry).toLocaleDateString()) {
        this.stockData = receivedData;
        this.stockDate = new Date(receivedData.dateOfEntry);
      }

    });
  }



}
