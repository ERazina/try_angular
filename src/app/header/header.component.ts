import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logo = 'assets/images/logo.png';
  public width = 50;
  public title = 'My Angular App';

  constructor() { }

  ngOnInit() {
  }

  public logSrc(src: string): void {
    console.log(src);
  }

  public getVal(value: string): void {
    console.log(value);
  }
}
