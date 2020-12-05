import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  formGroup: FormGroup;
  formDisabled = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      ownerName: [null, Validators.required],
      companyName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
    });

    this.loadForm();
  }

  loadForm() {
    // use this method to pull the values from the DB, while loading.
  }


  editProfileClick() {
    this.formDisabled = false;
  }

  onSubmit(post) {
    if (this.formGroup.valid) {
      this.formDisabled = true;
      console.log(post);
      // TODO: the updated form values are collected here and sent to backend and then to DB.
    } else {
         console.log(' Update the form values');
    }
  }

}
