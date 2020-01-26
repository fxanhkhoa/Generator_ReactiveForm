import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef, MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.css']
})
export class FieldRadioComponent implements OnInit {

  description = "Radio Field";
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  collections: String[] = [];

  constructor(public fb: FormBuilder,
              private dialogRef: MatDialogRef<FieldRadioComponent>) { }

  ngOnInit() {
  }

  radioGroup = this.fb.group({
    fieldType: new FormControl({value: 'radio', disabled: false}, []),
    idField: new FormControl('',[
      Validators.required
    ]),
    nameField: new FormControl('',[
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
  });

  save() {
    this.radioGroup.value.collections = this.collections;
    this.dialogRef.close(this.radioGroup.value);
  }

  close() {
    this.dialogRef.close();
  }

  remove(collection: String): void {
    const index = this.collections.indexOf(collection);

    if (index >= 0) {
      this.collections.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.collections.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
}
