import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { stockListInterface } from '../../shared/stockList.interface';
import { AddInvoiceService } from 'src/app/service/addinvoice.service';


@Component({
  selector: 'app-inventory-panel',
  templateUrl: './inventory-panel.component.html',
  styleUrls: ['./inventory-panel.component.scss']
})
export class InventoryPanelComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('form', { static: true }) ngForm;
  dateTime;
  myForm: any;
  value = '';
  formdata;
  items = [];
  stockList: any;
  constructor(private formBuilder: FormBuilder, private httpClientService: AddInvoiceService) { }

  ngOnInit() {
    this.loadDynamicProducts();
    this.dateTime = new Date();
    this.myForm = this.formBuilder.group({
      groudNutOnelt: new FormControl(this.stockList ? this.stockList.groudNutOnelt : '', Validators.required),
      groudNuthalflt: new FormControl(this.stockList ? this.stockList.groudNuthalflt : '', Validators.required),
      sesameOnelt: new FormControl(this.stockList ? this.stockList.sesameOnelt : '', Validators.required),
      sesamehalflt: new FormControl(this.stockList ? this.stockList.sesamehalflt : '', Validators.required),
      coconutOnelt: new FormControl(this.stockList ? this.stockList.coconutOnelt : '', Validators.required),
      coconuthalflt: new FormControl(this.stockList ? this.stockList.coconuthalflt : '', Validators.required),
      dateOfEntry: new FormControl(this.stockList ? new Date() : '', Validators.required),
      organicJaggeryOnekg: new FormControl(this.stockList ? this.stockList.organicJaggeryOnekg : '', Validators.required),
      organicJaggeryHalfkg: new FormControl(this.stockList ? this.stockList.organicJaggeryHalfkg : '', Validators.required),
      originalJaggeryOnekg: new FormControl(this.stockList ? this.stockList.originalJaggeryOnekg : '', Validators.required),
      originalJaggeryHalfkg: new FormControl(this.stockList ? this.stockList.originalJaggeryHalfkg : '', Validators.required)

    });

    this.formdata = new FormGroup({
      emailid: new FormControl('')
    });

  }


  submitForm(formData) {
    this.addStocks(formData.value);
  }

  addStocks(stocks: stockListInterface) {
    this.httpClientService.post('/stocks', stocks).subscribe(response => {
      console.log(response);
      alert('Stock Added Successfully');
      this.myForm.reset();
    });
  }


  loadDynamicProducts() {

    /**
     * Get the Products List from Backend
     * Load the same to the frontend.
     */

    // TODO: Change the call from backend

    //  this.httpClientService.getAllProducts().subscribe(() => {

    //  });


    const sampleDataFromBackend = [
       {
      productName : 'product1',
      availableStock: 2,
      maximumPrice: 123.34,
      sellingPrice: 234
    },
    {
      productName : 'product2',
      availableStock: 1,
      maximumPrice: 123.34,
      sellingPrice: 234
    },
    {
      productName : 'product3',
      availableStock: 2,
      maximumPrice: 123.34,
      sellingPrice: 234
    },
    {
      productName : 'product4',
      availableStock: 0,
      maximumPrice: 123.34,
      sellingPrice: 234
    },
    {
      productName : 'product4',
      availableStock: 0,
      maximumPrice: 123.34,
      sellingPrice: 234
    },
    {
      productName : 'product4',
      availableStock: 0,
      maximumPrice: 123.34,
      sellingPrice: 234
    },
    {
      productName : 'product4',
      availableStock: 0,
      maximumPrice: 123.34,
      sellingPrice: 234
    }
  ];


    this.items = sampleDataFromBackend;

  }

}

