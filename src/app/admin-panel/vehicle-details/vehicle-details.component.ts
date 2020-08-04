import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material'
import {MatSort} from '@angular/material/sort';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';


import { HttpClientService } from '../../service/http-client.service';
import {  Subscription} from 'rxjs';


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})

export class VehicleDetailsComponent implements OnInit {

  //Display's the allowed column names
  displayedColumns: string[] = ['vehicleNumber', 'vehicleName', 'date', 'cityOfTravel', 'drivername','drivernumber','start','end','total','action'];
  
  showAlert : boolean
  vehicle_data: any;
  dataSource = new MatTableDataSource(this.vehicle_data);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('form', {static:true}) ngForm;
  mySubscription: Subscription


  constructor( private dialog: MatDialog,
          private httpClientService:HttpClientService,
          private formBuilder: FormBuilder
           ) 
  {
    this.showAlert = false;
   }

  ngOnInit() {

  }
 


 

  
}
