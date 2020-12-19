import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  formGroup: FormGroup;
  formDisabled = true;

  constructor(private formBuilder: FormBuilder, private settingsSolution: SettingsService ) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      customerName: [null, Validators.required],
      companyName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
    });

    this.loadForm();
  }

  loadForm() {
    // use this method to pull the values from the DB, while loading.

    this.settingsSolution.get('/settings').pipe().subscribe(response => {
     if(response.data[0] != null) { 
        this.formGroup.setValue({
        customerName : response.data[0].customerName,
        companyName : response.data[0].companyName,
        phoneNumber : response.data[0].phoneNumber
      });
    }

    });
  }


  editProfileClick() {
    this.formDisabled = false;
  }

  onSubmit(post) {
    if (this.formGroup.valid) {
      this.formDisabled = true;
     this.settingsSolution.put('/settings', post).subscribe(reponse=>{
       console.log("The form has been udpated");
     }, error => {
       console.log(error);
     });
   
     } else {
         console.log(' Update the form values');
    }
  }

}
