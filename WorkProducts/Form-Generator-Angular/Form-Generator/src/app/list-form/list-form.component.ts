import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  allowShow = false;
  testJson = '{"application":[{"fieldType":"input","idField":"uemail","nameField":"uemail","type":"email","placeholder":"input email","formControlNameField":"uemail","cssField":"","scriptField":"","value":"fxanhkhoa@gmail.com"},{"fieldType":"select","idField":"gender","nameField":"gender","formControlNameField":"gender","placeholder":"choose gender","cssField":"","scriptField":"","collections":["male","female","other"],"value":"male"},{"fieldType":"radio","idField":"job","nameField":"job","placeholder":"choose job","formControlNameField":"job","cssField":"","scriptField":"","collections":["student","worker","officer"],"value":"student"},{"fieldType":"checkbox","idField":"confirm","nameField":"confirm","placeholder":"confirm information","formControlNameField":"confirm","checkboxContent":"confirmed","labelPosition":"after","cssField":"","scriptField":"","collections":[],"value":true}]}';

  constructor(public fb: FormBuilder) { }

  ngOnInit() {

  }

  previewFormGroup = this.fb.group({});

  loadForm(id){
    
  }
}
