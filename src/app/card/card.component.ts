import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
liste_card=[
  {
  image_url:'https://yt3.googleusercontent.com/c8p88q6z6Ba5q3053k7rcNV_7fgardb5Z0vMnisGoyS7ht1PN_sF5xhu4G1j_ZrBdK8W_Usj=s900-c-k-c0x00ffffff-no-rj',
  name_persone:'Monky d luffy',
  age:'pirate de 18 ans'
  },
  {
    image_url:'https://pbs.twimg.com/media/FqHiZlLXsAA57r3.jpg',
    name_persone:'roronoa zoro',
    age:'pirate de 21 ans'
      },
      {
        image_url:'https://www.melty.fr/wp-content/uploads/meltyfr/2022/02/media-39611-750x410.jpg',
        name_persone:'sanji vinsmoke',
        age:'pirate de 20 ans'
          },
          {
            image_url:'https://animecorner.me/wp-content/uploads/2022/02/nico-robin-2022-birthday.jpg',
            name_persone:'nico robin',
            age:'pirate de 28 ans'
              },
              {
                image_url:'https://www.nautiljon.com/images/perso/00/81/franky_1818.webp',
                name_persone:'franky',
                age:'pirate de 35 ans'
                  },

]
}
