import { Component, OnInit } from '@angular/core';
import { Slide } from '../../model/slide';

@Component({
  selector: 'app-headerslider',
  templateUrl: './headerslider.component.html',
  styleUrls: ['./headerslider.component.scss']
})
export class HeadersliderComponent implements OnInit {

  private activeSlide = 0;
  private interval;
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

    this.startRoutine();
  }

  stopRoutine() {
    console.log('a');
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startRoutine() {
    console.log('b');
    this.slideRoutine();
  }

  private slideRoutine() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.moveSliderForward();
    }, 5000);
  }

  moveSliderForward() {
    let newIndex = this.activeSlide;
    if (this.activeSlide === this.slides.length - 1) {
      newIndex = 0;
    } else {
      newIndex++;
    }
    this.setActive(this.slides[newIndex]);
  }

  setActive(slide: Slide) {
    this.startRoutine();
    let index = 0;
    this.slides.forEach(s => {
      if (s === slide) {
        s.active = true;
        this.activeSlide = index;
      } else {
        s.active = false;
      }
      index++;
    })

  }

}
