import { Component, OnInit } from '@angular/core';
import {Animal} from "../../models/Animals";

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {

  animals: Animal[];

  constructor() {
    this.animals = [
      {type: 'Lew afrykański', name: 'Zbyszek', photo: 'lion', description: 'Lubi kasze gryczaną z antylopkami'},
      {type: 'Żyrafa', name: 'Elma', photo: 'giraffe', description: 'Ma długą szyję i lęk wysokości. Płochliwa'},
      {type: 'Słoń', name: 'Janusz', photo: 'elephant', description: 'Lubi jeść wszystko. Z Zahirka szczególnie'},
      {type: 'Żyrafa', name: 'Elma', photo: 'giraffe', description: 'Ma długą szyję i lęk wysokości. Płochliwa'},
      {type: 'Lew afrykański', name: 'Zbyszek', photo: 'lion', description: 'Lubi kasze gryczaną z antylopkami'},
      {type: 'Pingwiny', name: 'Z Madagaskaru', photo: 'penguins', description: 'Kowalski, Szeregowy, Rico i Szefu'},
      {type: 'Słoń', name: 'Janusz', photo: 'elephant', description: 'Lubi jeść wszystko. Z Zahirka szczególnie'},
      {type: 'Pingwiny', name: 'Z Madagaskaru', photo: 'penguins', description: 'Kowalski, Szeregowy, Rico i Szefu'},
      {type: 'Lew afrykański', name: 'Zbyszek', photo: 'lion', description: 'Lubi kasze gryczaną z antylopkami'},
    ];
  }

  ngOnInit() {
  }

}
