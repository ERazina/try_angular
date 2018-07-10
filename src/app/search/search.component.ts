import { Component, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent {

  @Input()
  public placeholder: string;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();
  public getVal(value: string): void {
    this.search.emit(value);
  }

}
