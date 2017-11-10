import {Component, OnInit} from '@angular/core';
import {Opinion} from '../../models/Opinion';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  opinions: Opinion[];

  constructor() {
    this.opinions = [
      {type: 'student', name: 'Dominik Paluch', photo: 'dp', description: 'Tak dobrego obiadku nie jadłem od dawna!'},
      {
        type: 'student',
        name: 'Krystian Szabat',
        photo: 'ks',
        description: 'Wyśmienite! Ten Catering zmienił moje życie! Cała firma turlała się po podłodze z przejedzenia.'
      },
      {
        type: 'Lekarz dentysta',
        name: 'Ewa Płuska',
        photo: 'ep',
        description: 'Wooow, przepyszne! Polecam każdemu! Świetna oferta i super produkty.'
      },
      {
        type: 'taksówkarz',
        name: 'Robert Strawa',
        photo: 'ls2',
        description: 'Ale Smaczne! Lepiej gotuje tylko Teściowa :D Ceny rewelacyjne, nawet taka złotówa jak ja sobie może pozwolić.'
      },
      {type: 'student', name: 'Tomek Sitkiewicz', photo: 'ls', description: 'Tak dobrego obiadku nie jadłem od dawna!'},
      {
        type: 'shop assistent',
        name: 'Adam Garnys',
        photo: 'ag',
        description: 'Wyśmienite! Ten Catering zmienił moje życie!'
      },
      {
        type: 'profesor Angular',
        name: 'Konrad Klimczak',
        photo: 'kk',
        description: 'Lepszy od tego Cateringu jest tylko Bootstrap <3!'
      },
      {
        type: 'street workouter',
        name: 'Lukas Kuta',
        photo: 'lk',
        description: 'Nie ma lipy! Najlepsze stejki w mieście!'
      },
      {
        type: 'kamerdyner Arktosa',
        name: 'Jakub Kalucki',
        photo: 'kka',
        description: 'Aaaaa! Desery lodowe dla wszystkich!'
      },
    ];
  }

  ngOnInit() {
  }

}
