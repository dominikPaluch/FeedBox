import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../model/news';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent implements OnInit {

  @Input() nums: number;

  newsList: News[] = [];

  constructor() { }

  ngOnInit() {
    const titles: string[] = ['Kolejne chrzciny za nami', 'Studencka impreza', 'Catering na turniej FIFA'];
    const desc: string[] = [
      'W tak ważnym dniu, tylko solidna firma może sobie poradzić. FoodBox przygotował wyśmienite potrawy na chrzciny małego Krzysia.',
      'Studenckie wymagania są oczywiste, dużo, tanio i dobrze. Dostarczyliśmy im wszystkiego czego potrzebowali',
      'Gracze byli mega zadowoleniu, posiłki idealnie dobrane tak aby nie przeszkadzały w graniu'
    ];

    const maxNumber: number = this.nums || 10;

    for (let i = 0; i < maxNumber; i++) {
      const n: News = new News();
      n.id = i;
      n.title = titles[i % 3];
      n.date = `2${i}.11.17 1${i}:31`;
      n.desc = desc[i % 3];
      n.img = `/assets/images/0${(i % 3) + 1}.jpg`;
      this.newsList.push(n);
    }
  }

}
