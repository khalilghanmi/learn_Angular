import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  hero ={
    image_url:'',
    name_persone:'',
    age:''
  }
  ajouter(){
    this._shared.heros.push(this.hero)
   
      this.hero={
        image_url:'',
        name_persone:'',
        age:''
      }
    
    
  }
  constructor( public _shared: SharedService) { 

  }
}
