import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.css']
})
export class TestCompoComponent implements OnInit {
 
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
  