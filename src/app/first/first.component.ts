import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

name='amel jelliti'
age = 61
linkimageurl ="https://khalilghanmi.com/wp-content/uploads/2021/12/Khalil-Ghanmi.png"
alternative =  'angular 13'
linkimageurldirect ="assets/images/photo/Khalil-Ghanmi.png"
inpout_text=''
change(){
  this.name='touta'
  this.age= 2 
}




  constructor() { }

  ngOnInit() {
    // Mettre ici le code à exécuter lors de l'initialisation du composant
  }

}
