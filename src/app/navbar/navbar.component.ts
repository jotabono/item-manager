import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FavouriteItemsComponent } from '../favourite-items/favourite-items.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openFavsModal(): void {
    this.bsModalRef = this.modalService.show(FavouriteItemsComponent);
  }
}
