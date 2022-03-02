import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  myForm: FormGroup;
  formData:any;
  constructor(private fb: FormBuilder, public ds: DataService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [''],
      gender: [''],
      age: [''],
    });

    // this.myForm.valueChanges.subscribe((d) => {
    //   console.log('d', d);
    // });
  }

  get name() {
    return this.myForm.get('name');
  }
  get gender() {
    return this.myForm.get('gender');
  }
  get age() {
    return this.myForm.get('age');
  }

  submit() {
    console.log(this.myForm.value);
    this.formData=this.myForm.value;
    this.ds.$formData.next(this.formData)
  }
}
