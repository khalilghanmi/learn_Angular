import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
})
export class ContactComponent {

  chaine ='951236'
nembre = +this.chaine
  onSubmit(itemForm: any){
console.log(itemForm.value)
alert(itemForm.value.firstname)
alert(this.nembre)
console.log(this.nembre)
}
imageUrl: string = 'assets/images/Khalil-Ghanmi.png';
// onFileSelected(event: any) {
//   const file: File = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = (e: any) => {
//     this.imageUrl = e.target.result;
//   };

//   reader.readAsDataURL(file);
  
// }

selectedFile!: File;
onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}
uploadFile() {
  const formData = new FormData();
  formData.append('file', this.selectedFile);

  const uploadUrl = 'assets/images/' + this.selectedFile.name;

  fetch(uploadUrl, {
    method: 'PUT',
    body: formData
  })
  .then(response => {
    console.log('File uploaded successfully.');
  })
  .catch(error => {
    console.error('Error uploading file: ', error);
  });
}
// emailControl = new FormControl('', [Validators.required, Validators.email]);

//   onSubmit() {
//     if (this.emailControl.valid) {
//       // Do something with the valid email value
//     }
//   }

  // emailForm: FormGroup;

  // ngOnInit() {
  //   this.emailForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email])
  //   });
  // }

  // onSubmit() {
  //   if (this.emailForm.valid) {
  //     // Do something with the valid email value
  //   }
  // }
}
