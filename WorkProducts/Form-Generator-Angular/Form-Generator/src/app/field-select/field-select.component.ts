import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.css']
})
export class FieldSelectComponent implements OnInit {

  description = 'Select';

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  selectForm = this.fb.group({
    id: new FormControl('',[]),
    
  })
}
