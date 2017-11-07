import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { EasingLogic } from "ng2-page-scroll";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {
  title = 'app';

  scrollimateOptions: any = {
    myScrollimation1: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 550,
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
}
