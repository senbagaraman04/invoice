import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClientService } from './http-client.service';

@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.scss']
})
export class InventoryPanelComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('form', {static:true}) ngForm;
  dateTime;
  myForm: any;
  stockList: any;
  constructor( private formBuilder: FormBuilder,private httpClientService:HttpClientService) { }

  ngOnInit() {
    this.dateTime = new Date();
    this.myForm = this.formBuilder.group({
      groudNutOnelt: new FormControl(this.stockList ? this.stockList.groudNutOnelt: '', Validators.required),
      groudNuthalflt: new FormControl(this.stockList ? this.stockList.groudNuthalflt: '', Validators.required),
      sesameOnelt: new FormControl(this.stockList ? this.stockList.sesameOnelt: '', Validators.required),
      sesamehalflt: new FormControl(this.stockList ? this.stockList.sesamehalflt: '', Validators.required),
      coconutOnelt:  new FormControl(this.stockList ? this.stockList.coconutOnelt: '', Validators.required),
      coconuthalflt:  new FormControl(this.stockList ? this.stockList.coconuthalflt: '', Validators.required),
      dateOfEntry: new FormControl(this.stockList ? new Date(): '', Validators.required),
      organicJaggeryOnekg:  new FormControl(this.stockList ? this.stockList.organicJaggeryOnekg: '', Validators.required), 
      organicJaggeryHalfkg:  new FormControl(this.stockList ? this.stockList.organicJaggeryHalfkg: '', Validators.required), 
      originalJaggeryOnekg:  new FormControl(this.stockList ? this.stockList.originalJaggeryOnekg: '', Validators.required), 
      originalJaggeryHalfkg:  new FormControl(this.stockList ? this.stockList.originalJaggeryHalfkg: '', Validators.required)
   
    });
  }


  submitForm(formData) {
       this.addStocks(formData.value);       
  }

  addStocks(stocks: stockListInterface) {
      this.httpClientService.post("/stocks", stocks).subscribe (response =>{
        console.log(response);
        alert("Stock Added"); 
      })
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
  dateOfEntry: number;
  organicJaggeryOnekg: number;
  organicJaggeryHalfkg: number;
  originalJaggeryOnekg: number;
  originalJaggeryHalfkg: number;

}
