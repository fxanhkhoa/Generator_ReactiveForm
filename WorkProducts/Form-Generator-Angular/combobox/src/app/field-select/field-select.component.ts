import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.css']
})
export class FieldSelectComponent implements OnInit {

  description = "Select Field"

  // City
  selectCity = {
    condition: "",
    formControlName: "",
    conditionValue: "",
    resultValue: [
      {value:'HCM', viewValue: 'HCM'},
      {value:'HN', viewValue: 'HN'},
      {value:'HP', viewValue: 'HP'},
      {value:'QB', viewValue: 'QB'}
    ]
  }

  // District
  selectDistrict = {
    condition: "IF",
    formControlName: "selectFormCity",
    conditionValue: "",
    resultValue: [
      {value:'HCM', viewValue: ['Q1', 'Q2', 'Q3', 'Q4']},
      {value:'HN', viewValue: ['Hoan Kiem', 'Tu Liem', 'Cau Giay']},
      {value:'HP', viewValue: ['xxx', 'yyy', 'zzz']},
      {value:'QB', viewValue: ['Dong Hoi', 'Phong Nha']}
    ]
  }

  // Block
  selectBlock = {
    condition: "IF",
    formControlName: "selectFormDistrict",
    conditionValue: "",
    resultValue: [
      {value:'HCM', viewValue: 'HCM'},
      {value:'HN', viewValue: 'HN'},
      {value:'HP', viewValue: 'HP'},
      {value:'QB', viewValue: 'QB'}
    ]
  }

  // Form City
  selectFormCity = this.fb.group({
    fieldType: new FormControl({value: 'select', disable: false}, []),
    fieldID: new FormControl('',[
      Validators.required
    ]),
    placeholder: new FormControl('',[
      Validators.required
    ]),
    type: new FormControl('',[
      Validators.required
    ]),
    FormControlNameField: new FormControl('',[]),
    cssField: new FormControl('',[]),
    scriptField: this.selectCity
  })

  // Form District
  selectFormDistrict = this.fb.group({
    fieldType: new FormControl({value: 'select', disable: false}, []),
    fieldID: new FormControl('',[
      Validators.required
    ]),
    placeholder: new FormControl('',[
      Validators.required
    ]),
    type: new FormControl('',[
      Validators.required
    ]),
    FormControlNameField: this.selectFormCity,
    cssField: new FormControl('',[]),
    scriptField: this.selectDistrict
  })

  // Form Block
  selectFormBlock = this.fb.group({
    fieldType: new FormControl({value: 'select', disable: false}, []),
    fieldID: new FormControl('',[
      Validators.required
    ]),
    placeholder: new FormControl('',[
      Validators.required
    ]),
    type: new FormControl('',[
      Validators.required
    ]),
    FormControlNameField: new FormControl('',[]),
    cssField: new FormControl('',[]),
    scriptField: this.selectBlock
  })

  _district: string[] = [];

  
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  checkDistrict(city : String){
    for (let index in this.selectFormDistrict.get('scriptField').value.resultValue)
      if(city == this.selectFormDistrict.get('scriptField').value.resultValue[index].value)
        this._district = this.selectFormDistrict.get('scriptField').value.resultValue[index].viewValue;
        this.selectFormDistrict.controls['type'].setValue(this._district[0]); 
        console.log(this._district);
        return true;
    return false;    
  }
}
