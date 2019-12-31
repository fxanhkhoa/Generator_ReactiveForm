import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.css']
})
export class GenerateFormComponent implements OnInit {

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  listFormField = [
    'input',
    'select',
    'radio',
    'check box'
  ];

  constructor(private _formBuilder: FormBuilder) { }

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
      console.log("Same container")
    } else {
      console.log("Different container")
    }
  }
}
