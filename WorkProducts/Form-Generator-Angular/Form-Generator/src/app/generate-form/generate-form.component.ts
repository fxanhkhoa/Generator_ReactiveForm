import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FieldInputComponent } from '../field-input/field-input.component';
import { FieldSelectComponent } from '../field-select/field-select.component';
import { FieldRadioComponent } from '../field-radio/field-radio.component';
import { FieldCheckboxComponent } from '../field-checkbox/field-checkbox.component';

import { saveAs } from 'filesaver';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.css']
})
export class GenerateFormComponent implements OnInit {

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  listFormField = [
    'input',
    'select',
    'radio',
    'check box'
  ];

  // For clear data debugging
  previewData = "";

  // *Input Field Dialog
  fieldInputDialog: MatDialogRef<FieldInputComponent>;
  // *Select Field Dialog
  fieldSelectDialog: MatDialogRef<FieldSelectComponent>;
  // *Radio Field Dialog
  fieldRadioDialog: MatDialogRef<FieldRadioComponent>;
  // *Checkbox Field Dialog
  fieldCheckboxDialog: MatDialogRef<FieldCheckboxComponent>;

  // *Preview Form Group
  // * Array of Controls
  previewHeight = 2;
  exportJson = {
    application: []
  }

  previewFormGroup = this.fb.group({

  })

  constructor(private fb: FormBuilder,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log("Same container")
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("Different container")
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  dropFormField(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // console.log("Same container")
    } else {
      // console.log("Different container")
      // console.log(this.listFormField[event.previousIndex])
      
      /** Input Field */
      if (event.previousIndex == 0){
        this.fieldInputDialog = this.dialog.open(FieldInputComponent,{
          hasBackdrop: true,
          // width: '250px',
          // height: '200px'
        });

        this.fieldInputDialog.afterClosed().subscribe(
          data => {
            if (data){
              console.log("Dialog Output data", data);
              this.previewData += JSON.stringify(data);

              // TODO: Add to FormGroup
              this.addInput(data);
            }
            
          }
        );
      } 
      /** Select Field */
      else if (event.previousIndex == 1){
        this.fieldSelectDialog = this.dialog.open(FieldSelectComponent,{
          hasBackdrop: true,
          // width: '250px',
          // height: '200px'
        });

        this.fieldSelectDialog.afterClosed().subscribe(
          data => {
            if (data){
              console.log("Dialog Output data", data);
              this.previewData += JSON.stringify(data);
  
              this.addSelect(data);
            }
          }
        );
      }
      /** Radio Field */
      else if (event.previousIndex == 2){
        this.fieldRadioDialog = this.dialog.open(FieldRadioComponent,{
          hasBackdrop: true,
          // width: '250px',
          // height: '200px'
        });

        this.fieldRadioDialog.afterClosed().subscribe(
          data => {
            if (data){
              console.log("Dialog Output data", data);
              this.previewData += JSON.stringify(data);

              // TODO: Add to FormGroup
              this.addRadio(data);
            }
          }
        );
      }
      /** Check box */
      else if (event.previousIndex == 3){
        this.fieldCheckboxDialog = this.dialog.open(FieldCheckboxComponent,{
          hasBackdrop: true,
          // width: '250px',
          // height: '200px'
        });

        this.fieldCheckboxDialog.afterClosed().subscribe(
          data => {
            if (data){
              console.log("Dialog Output data", data);
              this.previewData += JSON.stringify(data);

              // TODO: Add to FormGroup
              this.addCheckbox(data);
            }
          }
        );
      }
    }
  }

  export(){
    console.log("Exporting");
    console.log(this.previewFormGroup.value);

    for (let i = 0; i < this.exportJson.application.length; i++){ 
      let nameField = this.exportJson.application[i].formControlNameField;
      // TODO: Get data of form control
      let dataValue = this.previewFormGroup.get(nameField).value;
      this.exportJson.application[i].value = dataValue;
    }

    console.log(this.exportJson);
    console.log(JSON.stringify(this.exportJson));
  }

  // * Function for Adding Field
  addInput(data){
    // TODO: Create new FormControl
    // TODO: Check if Need Validator
    // * Email
    if (data.type == 'email'){
      this.previewFormGroup.addControl(data.formControlNameField, new FormControl('', [Validators.email]));
    } 
    // * Other types
    else {
      this.previewFormGroup.addControl(data.formControlNameField, new FormControl('', []));
    }
    
    this.exportJson.application.push(data)
    // TODO: Add height for grid
    this.previewHeight += 1;

    console.log(this.exportJson);
  }

  addRadio(data){
    // TODO: Create new FormControl
    this.previewFormGroup.addControl(data.formControlNameField, new FormControl('', []));
    this.exportJson.application.push(data);

    this.previewHeight += data.collections.length / 2;

    console.log(this.exportJson);
  }

  addCheckbox(data){
    // TODO: Create new FormControl
    this.previewFormGroup.addControl(data.formControlNameField, new FormControl('', []));
    this.exportJson.application.push(data);

    this.previewHeight += 1;

    console.log(this.exportJson);
  }

  addSelect(data){
    // TODO: Create new FormControl
    this.previewFormGroup.addControl(data.formControlNameField, new FormControl('', []));
    this.exportJson.application.push(data);

    this.previewHeight += 1;

    console.log(this.exportJson);
  }

  removeField(data){
    console.log(data)
  }
}
