import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-insert-image',
  templateUrl: './insert-image.component.html',
  styleUrls: ['./insert-image.component.css']
})
export class InsertImageComponent {
  filedata:any;
    /* File onchange event */
    fileEvent(e){
        this.filedata = e.target.files[0];
    }
    /* Upload button functioanlity */
    onSubmitform(f: NgForm) {
       
      var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('image', this.filedata);
      /* Image Post Request */
      this.http.post('http://localhost/save.php', myFormData, {
      headers: headers
      }).subscribe(data => {
       //Check success message
       console.log(data);
      });  
  
  }
}
