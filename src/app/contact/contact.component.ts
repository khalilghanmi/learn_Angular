import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit(itemForm: any){
console.log(itemForm.value)
alert(itemForm.value.firstname)
}
// emailControl = new FormControl('', [Validators.required, Validators.email]);

//   onSubmit() {
//     if (this.emailControl.valid) {
//       // Do something with the valid email value
//     }
//   }

  emailForm: FormGroup;

  ngOnInit() {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      // Do something with the valid email value
    }
  }
}
