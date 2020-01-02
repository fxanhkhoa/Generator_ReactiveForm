import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef } from '@angular/material';

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

  description = "Input Field";

  typeSelect = [
    {value:'color', viewValue: 'color'},
    {value:'date', viewValue: 'date'},
    {value:'datetime-local', viewValue:'datetime-local'},
    {value:'email', viewValue: 'email'},
    {value:'month', viewValue: 'month'},
    {value:'number', viewValue: 'number'},
    {value:'password', viewValue: 'password'},
    {value:'search', viewValue: 'search'},
    {value:'tel', viewValue: 'tel'},
    {value:'text', viewValue: 'text'},
    {value:'time', viewValue: 'time'},
    {value:'url', viewValue: 'url'},
    {value:'week', viewValue: 'week'}
  ];

  inputForm = this.fb.group({
    idField: new FormControl('',[
      Validators.required
    ]),
    type: new FormControl('',[
      Validators.required
    ]),
    placeholder: new FormControl('',[
      Validators.required
    ]),
    formControlNameField: new FormControl('',[
      Validators.required
    ]),
    cssField: new FormControl('',[]),
    scriptField: new FormControl('',[])
  })

  constructor(public fb: FormBuilder,
              private dialogRef: MatDialogRef<FieldInputComponent>) { }

  ngOnInit() {
    
  }

  save() {
    this.dialogRef.close(this.inputForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
