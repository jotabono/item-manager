import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Output() sortProperty: EventEmitter<string> = new EventEmitter<string>();
  @Output() sortCriteria: EventEmitter<boolean> = new EventEmitter<boolean>();
  property = 'title';
  order = false;
  constructor() { }

  ngOnInit(): void {
    this.buildDefaultSort();
  }

  buildDefaultSort(): void {
    this.sortProperty.emit('title');
  }

  setSortProperty(property): void {
    this.property = property;
    this.sortProperty.emit(property);
  }

  setSortCriteria(order): void {
    this.order = order;
    this.sortCriteria.emit(order);
  }
}
