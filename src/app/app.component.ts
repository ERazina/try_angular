import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {IUsers, users$} from './users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
  public logo = 'assets/images/logo.png';
  public width = 50;
  public title = 'My Angular App';
  public text = 'Search user';
  public loader = 'assets/images/loader.gif';
  public users$: Observable<IUsers[ ]> = users$;

  public users: IUsers[ ];

  public ngOnInit(): void {
    this.users$.subscribe((users: IUsers[ ]) =>
    this.users = users
  ); }

}
