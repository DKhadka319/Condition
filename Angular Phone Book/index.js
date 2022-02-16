// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: `
    <div class="form-wrapper">
      <form [formGroup]="form">
        <div>
          <label for="firstName">First name</label>
          <input formControlName="firstname" type="text" name="firstName" id="firstName" class="userFirstname">
        </div>
        <div>
          <label for="lastName">Last name</label>
          <input formControlName="lastname" type="text" name="lastName" id="lastName" class="userLastname">
        </div>
        <div>
          <label for="phoneNumber">Phone number</label>
          <input formControlName="phone" type="tel" name="phoneNumber" id="phoneNumber" class="userPhone">
        </div>
        <div>
          <input (click)="submit()" type="button" value="submit" class="submitButton">
        </div>
      </form>
    <div>
    <div class="informationTable">
      <ng-container *ngFor="let element of list; let i = index">
        <div class="element-{{i}}">
          <div>{{element.lastname}}</div>
          <div>{{element.firstname}}</div>
          <div>{{element.phone}}</div>
        </div>
      </ng-container>
    </div>`,
  styles: []
})

export class MainAppComponent implements OnInit {
  form: FormGroup;
  
  list = [];

  defaultValues = {
    firstname: 'Coder',
    lastname: 'Byte',
    phone: '8885559999',
  }

  ngOnInit() { 
    this.form = new FormGroup({
      firstname: new FormControl('', []),
      lastname: new FormControl('', []),
      phone: new FormControl('', []),
    });

    this.form.patchValue(this.defaultValues);
  }

  submit() {
    const formValue = this.form.value;
    this.list.push({
      firstname: formValue.firstname,
      lastname: formValue.lastname,
      phone: formValue.phone,
    });

    this.list.sort((a, b) => {
      return a.lastname.localeCompare(b.lastname)
    });

    this.form.reset(this.defaultValues);
  }
}
