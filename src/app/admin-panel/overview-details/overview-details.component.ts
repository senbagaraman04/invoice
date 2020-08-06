import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material'
import {MatSort} from '@angular/material/sort';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import {VEHICLE} from '../../shared/formFields';

import { HttpClientService } from '../../service/http-client.service';
import {  Subscription} from 'rxjs';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-overview-details',
  templateUrl: './overview-details.component.html',
  styleUrls: ['./overview-details.component.scss']
})

export class OverviewDetailsComponent implements OnInit {

  


  constructor( 
           ) 
  {
    
   }

  ngOnInit() {
  
  }
 


}
