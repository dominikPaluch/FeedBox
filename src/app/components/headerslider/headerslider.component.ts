import { Component, OnInit } from '@angular/core';
import { Slide } from '../../model/slide';

@Component({
  selector: 'app-headerslider',
  templateUrl: './headerslider.component.html',
  styleUrls: ['./headerslider.component.scss']
})
export class HeadersliderComponent implements OnInit {

  slides: Slide[] = [];

  constructor() { }

  ngOnInit() {
    const texts: string[] = ["EcoFood", "Zimowa promocja", "Jesienne boxy"];
    const titles: string[] = [
      "Sprawdź naszą nową oferte, produktów ekologicznych", 
      "Spróbuj naszych rozgrzewających zimowych zestawów obiadowych", 
      "Znudzony jesienną monotonnią? Sprawdź nasze posiłki"
    ];

    for (let i = 0; i < 3; i++) {
      const slide: Slide = new Slide(titles[i], texts[i], '', false, `./assets/slide0${i + 1}.jpg`);
      if (i === 0) {
        slide.active = true;
      }

      this.slides.push(slide);
    }
  } 

  setActive(slide: Slide) {
    this.slides.forEach(s => {
      s.active = false;
    })

    slide.active = true;

  }

}
