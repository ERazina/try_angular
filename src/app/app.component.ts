import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  public logo = 'assets/images/logo.png';
  public width = 50;
  public title = 'My Angular App';
  public text = 'Search user';
}
