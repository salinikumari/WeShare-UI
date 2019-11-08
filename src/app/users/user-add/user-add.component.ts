import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
userForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      personal: new FormGroup({
        'firstName':new FormControl(null, [Validators.required]),
        'lastName':new FormControl(null, [Validators.required]),
        'userName':new FormControl(null, [Validators.required])
        }),
      'contacts':new FormArray([this.createContacts()]),
      'hobbies': new FormGroup({
        'reading':new FormControl(null),
        'singing':new FormControl(null),
        'dancing':new FormControl(null),
        'others':new FormControl(null),
        'otherValue':new FormControl(null)
      })
    });
  }

  getContactsControls(){
    return (<FormArray>this.userForm.get('contacts')).controls;
  }

  createContacts(){
    const contacts = new FormGroup({
      'phone':new FormControl(null, [Validators.required]),
      'address':new FormControl(null, [Validators.required]),
      'city':new FormControl(null, [Validators.required]),
      'state':new FormControl(null, [Validators.required]),
      'country':new FormControl(null, [Validators.required]),
      'zipcode':new FormControl(null, [Validators.required]),
      });
    return contacts;
  }
  onAddContacts(){
    (<FormArray>this.userForm.get('contacts')).push(this.createContacts());
  }
}
