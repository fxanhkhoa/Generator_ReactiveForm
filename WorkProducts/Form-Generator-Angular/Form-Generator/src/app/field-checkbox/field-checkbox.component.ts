import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.css']
})
export class FieldCheckboxComponent implements OnInit {

  description = "Checkbox Field";

  positionSelect = [
    {value:'after', viewValue: 'after'},
    {value:'before', viewValue: 'before'}
  ];

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  collections: String[] = [];

  constructor(public fb: FormBuilder,
              private dialogRef: MatDialogRef<FieldCheckboxComponent>) { }

  ngOnInit() {
  }

  checkBoxGroup = this.fb.group({
    fieldType: new FormControl({value: 'checkbox', disabled: false}, []),
    idField: new FormControl('',[
      Validators.required
    ]),
    nameField: new FormControl('',[
      Validators.required
    ]),
    placeholder: new FormControl('',[]),
    formControlNameField: new FormControl('',[
      Validators.required
    ]),
    checkboxContent: new FormControl('',[
      Validators.required
    ]),
    labelPosition: new FormControl('after',[]),
    cssField: new FormControl('',[]),
    scriptField: new FormControl('',[]),
  });

  save() {
    this.checkBoxGroup.value.collections = this.collections;
    this.dialogRef.close(this.checkBoxGroup.value);
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
