/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';


// Annotations
@Component({
  selector: 'hackr'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})


// Controller
class HackrComponent {
  name: string;

  constructor() {
    this.name = 'Hackr TEST';
  }
}

bootstrap(HackrComponent);
