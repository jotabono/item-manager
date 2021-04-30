import { Component, OnInit } from '@angular/core';
import {
  IItem
} from '../../models/interfaces';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  filterTerm: string;
  orderField: string;
  orderCriteria: string;

  items: IItem[] | undefined;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
    this.orderField = 'title'
    this.orderCriteria = 'asc'
  }

  getItems(): void {
    this.itemsService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

}
