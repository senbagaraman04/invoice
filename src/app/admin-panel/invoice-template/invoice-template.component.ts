import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClientService } from 'src/app/service/http-client.service';

export class DynamicGrid {
  rate: number;
  quantity: number;
  description: string;
  name: string;
  city: string;
  invoiceNumber: number;
}


@Component({
  selector: 'app-invoice-template',
  templateUrl: './invoice-template.component.html',
  styleUrls: ['./invoice-template.component.scss']
})
export class InvoiceTemplateComponent implements OnInit {
  companyName: string;
  phonenumber: string;
  ownerName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private service: HttpClientService) { }


  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  totalBilledAmount = 0;
  customerName: string;
  customerCity: string;

  ngOnInit() {
    this.cdr.detectChanges();
    this.newDynamic = {description: '', quantity: '', rate: '' };
    this.dynamicArray.push(this.newDynamic);
    this.loadCompanyInfo();
  }
  loadCompanyInfo() {

    // Get the data from the values here

    this.companyName =  'Company Name goes here';
    this.phonenumber =  '+91 0000000000';
    this.ownerName = 'Mr. Owner';
    this.addressLine1 = '#23, RHUJ NAGAR';
    this.addressLine2 = 'AREA NAME';
    this.city = 'CityofOperation';
    this.pincode = '000000';


  }

  addRow() {
       this.newDynamic = {description: '', quantity: '', rate: ''};
       this.dynamicArray.push(this.newDynamic);
       console.log(this.dynamicArray);
       return true;
  }

  deleteRow(index) {
      if (this.dynamicArray.length === 1) {
           return false;
      } else {
          this.dynamicArray.splice(index, 1);
          // update the total billed amount when delete button clicked
          this.calc();
          return true;
      }

  }


  calc() {
    console.log(this.dynamicArray);
    let totalSum = 0;
    this.dynamicArray.forEach(e => {
     // console.log(e.rate);
     // console.log(e.quantity);
      totalSum = totalSum + ( e.rate * e.quantity);
    });

    this.totalBilledAmount = totalSum;
  }

  addInv() {
    // calculate the total amount even if we select the invoice adition directly.
     this.calc();
     console.log(this.dynamicArray);
     console.log(this.customerName);
     console.log(this.customerCity);

     this.service.post('invoice', null);

    // reset the values when all is fine and added to the DB.
     this.dynamicArray = [];
     this.customerName = '';
     this.customerCity = '';
     this.totalBilledAmount = 0;
  }


}
