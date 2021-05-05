import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'item-manager';
  filters: object;
  property: string;
  criteria: boolean;

  constructor() { }

}
