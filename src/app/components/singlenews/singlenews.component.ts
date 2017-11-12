import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../model/news';

@Component({
  selector: 'app-singlenews',
  templateUrl: './singlenews.component.html',
  styleUrls: ['./singlenews.component.scss']
})
export class SinglenewsComponent implements OnInit, OnDestroy {
  private sub: any;
  id: number;
  news: News;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const titles: string[] = ['Kolejne chrzciny za nami', 'Studencka impreza', 'Catering na turniej FIFA'];
    const desc: string[] = [
      'W tak ważnym dniu, tylko solidna firma może sobie poradzić. FoodBox przygotował wyśmienite potrawy na chrzciny małego Krzysia.',
      'Studenckie wymagania są oczywiste, dużo, tanio i dobrze. Dostarczyliśmy im wszystkiego czego potrzebowali',
      'Gracze byli mega zadowoleniu, posiłki idealnie dobrane tak aby nie przeszkadzały w graniu'
    ];

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.news = new News();
      this.news.id = this.id;
      this.news.title = titles[this.id % 3];
      this.news.desc = desc[this.id % 3];
      this.news.date = `21.11.17 11:31`;
      this.news.img = `/assets/images/0${(this.id % 3) + 1}.jpg`;
      this.news.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur, ante eleifend malesuada finibus, ante dolor posuere nisl, a commodo metus orci sollicitudin dolor. Aenean laoreet tortor id neque feugiat varius. Cras interdum felis et consequat lobortis. Sed iaculis diam enim, ut scelerisque turpis porttitor non. Nam nec ornare diam, in pharetra diam. Aliquam placerat purus tortor, ac eleifend urna maximus eu. In dui odio, sollicitudin blandit justo eget, posuere vulputate nisl.';

    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
