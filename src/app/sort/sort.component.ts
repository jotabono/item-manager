import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
	@Output() sortProperty: EventEmitter<string> = new EventEmitter<string>();
  @Output() sortCriteria: EventEmitter<boolean> = new EventEmitter<boolean>();
  order: boolean;
	constructor() { }

  ngOnInit(): void {
    this.buildDefaultSort();
  }

	buildDefaultSort(): void {
    this.sortProperty.emit("title");
	}

  setSortProperty(property){
    this.sortProperty.emit(property);
  }

  setSortCriteria(order){
    this.sortCriteria.emit(order);
  }
}
