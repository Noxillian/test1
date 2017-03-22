import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>test {{name}}</h1>`
})
export class AppComponent { name = '1'; }
