import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {IUsers } from '../users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
    public position: number;

  @Input()
  public user: IUsers;

  @Input()
    public isOdd: boolean;

}
