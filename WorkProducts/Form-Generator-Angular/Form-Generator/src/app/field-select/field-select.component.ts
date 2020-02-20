import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {  MatDialogRef, MatChipInputEvent } from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.css']
})
export class FieldSelectComponent implements OnInit {

  description = 'Select';
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  collections: String[] = [];
  

  constructor(public fb: FormBuilder,
              private dialogRef: MatDialogRef<FieldSelectComponent>) { }

  ngOnInit() {
  }

  selectForm = this.fb.group({
    fieldType: new FormControl('select',[]),
    idField: new FormControl('',[]),
    nameField: new FormControl('',[]),
    formControlNameField: new FormControl('', []),
    placeholder: new FormControl('', []),
    cssField: new FormControl('',[]),
    scriptField: new FormControl('',[])
  })

  save() {
    this.selectForm.value.collections = this.collections;
    this.dialogRef.close(this.selectForm.value);
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
