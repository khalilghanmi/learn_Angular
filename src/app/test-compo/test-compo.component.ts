import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.css']
})
export class TestCompoComponent implements OnInit {
 
  displayim = true

  aux=""
  rest=""
  imagechange="https://i.pinimg.com/236x/a0/a0/9b/a0a09b5570765af25a3336cb62032088.jpg"
  hidenshow(){
    this.aux=this.imagechange
    this.imagechange=this.rest
    this.rest=this.aux
  }
  users={
    name:'Belgacem Jelliti',
    age: 82,
    image: 'https://khalilghanmi.com/wp-content/uploads/2022/04/logo-khalil-ghanmi-finale-blanc.svg' 
  }
  changenames ='' 
  changename(){
    this.users.name = this.changenames
  }


    constructor() { }
  
    ngOnInit() {
      // Mettre ici le code à exécuter lors de l'initialisation du composant
    }
  
  }
  