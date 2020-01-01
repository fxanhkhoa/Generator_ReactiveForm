import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.css']
})
export class FieldInputComponent implements OnInit {

  description = 'Input Field';

  inputForm = this.fb.group({
    idField: new FormControl('',[
      Validators.required
    ]),
    type: new FormControl('',[]),
    placeholder: new FormControl('',[]),
    formControlName: new FormControl('',[])
  })

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    
  }

}
