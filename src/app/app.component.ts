import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { EasingLogic } from "ng2-page-scroll";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("elementState", [
      state("inactive", style({
        opacity: 0,
        visibility: "hidden",
      })),
      state("active", style({
        opacity: 1,
        visibility: "visible",
      })),
      transition("* => active", animate("300ms ease-in")),
      transition("* => inactive", animate("300ms ease-out")),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  scrollimateOptions: any = {
    myScrollimation1: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 250,
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    }
  };

  myEasing: EasingLogic = {
    ease: (t: number, b: number, c: number, d: number): number => {
      if (t === 0) {
        return b;
      }
      if (t === d) {
        return b + c;
      }
      if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      }
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  };

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        console.log('title', title);
        this.titleService.setTitle(title);
        window.scrollTo(0, 0);
      } else {
        return;
      }
    });
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
