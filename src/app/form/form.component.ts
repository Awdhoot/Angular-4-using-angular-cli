import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  firstName: FormControl;
  address: FormControl;
  form: FormGroup;


  emailPattern = new RegExp('[a-zA-Z0-9]+@[a-z]+\.(com|in)');
  model: any;
  submitted: boolean;
  branches: Array<string> = [];

  constructor(private  formBuilder: FormBuilder) {
    this.firstName = new FormControl('', Validators.maxLength(5));
    this.address = new FormControl('', Validators.minLength(5));
    this.form = this.formBuilder.group({
      'firstName': this.firstName,
      'address': this.address
    });
  }

  ngOnInit() {
    this.branches = ['Computer Engineering', 'Mechanical Engineering',
      'Civil Engineering', 'Chemical Enginerring', 'Electrical Engineering'];
    this.submitted = false;
    this.model = {
      name: '',
      email: '',
      branch: ''
    };
  }

  onSubmit(myForm: NgForm) {
    console.log('Form Submitted!!');
    myForm.reset();
    console.log(this.model);
  }

  newModel(form: NgForm) {
    this.model = {
      name: '',
      email: '',
      branch: ''
    };
    form.reset();
  }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
  }
}
