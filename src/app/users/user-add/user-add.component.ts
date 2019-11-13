import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { User } from '../../model/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
userForm : FormGroup;
editMode : boolean = false;
editIndex: number = -1;

 constructor(private userSvc : UserService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.editIndex = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm(){
    let contacts = new FormArray([]);
    let user = null;

    if (this.editMode){
      user = this.userSvc.getUser(this.editIndex);
      for (let addr of user.contacts)
        contacts.push(this.createContacts());
    }
    else
      contacts.push(this.createContacts());

    this.userForm = new FormGroup({
      'firstName':new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'lastName':new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'userName':new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'contacts':contacts,
      'hobbies': new FormGroup({
        'reading':new FormControl(null),
        'singing':new FormControl(null),
        'dancing':new FormControl(null),
        'others':new FormControl(null),
        'otherValue':new FormControl(null)
      })
    });
    if (this.editMode){
      this.userForm.patchValue (user);
    }
  }

  createContacts(){
    const contacts = new FormGroup({
      'phone':new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'address':new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      'city':new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'state':new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'country':new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      'zipcode':new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      });
    return contacts;
  }

  onAddContacts(){
    (<FormArray>this.userForm.get('contacts')).push(this.createContacts());
  }

  getContactsControls(){
    return (<FormArray>this.userForm.get('contacts')).controls;
  }

  onSubmit(){
    if (!this.userForm.valid){
      this.validateAllFormFields(this.userForm);
      return;
    }
    const user : User = new User();
    user.firstName = this.userForm.value.firstName;
    user.lastName = this.userForm.value.lastName;
    user.userName = this.userForm.value.userName;
    user.contacts = this.userForm.value.contacts;
    user.hobbies = this.userForm.value.hobbies;
    if (this.editMode){
      this.userSvc.updateUser(this.editIndex, user);
    }
    else
    {
      this.userSvc.addUser(user);
//      this.userSvc.addUser(this.userForm.value);
    }
    this.router.navigate(['users']);
  }

  validateAllFormFields(formGroup: FormGroup) {  
    Object.keys(formGroup.controls).forEach(field => { 
      const control = formGroup.get(field);     
      if (control instanceof FormControl)
        control.markAsTouched({ onlySelf: true });
      else if (control instanceof FormGroup) 
        this.validateAllFormFields(control);         
      else if (control instanceof FormArray)
      {
        control.controls.forEach(arrayField=>{
          if (arrayField instanceof FormControl)
            arrayField.markAsTouched({ onlySelf: true });
          else if (arrayField instanceof FormGroup)
            this.validateAllFormFields(arrayField);
        });
      }
    });
  }

  onDeleteContact(index : number){
    (<FormArray>this.userForm.get('contacts')).removeAt(index);
  }
}
