import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsComponent } from './items/items.component';
import { SearchComponent } from './search/search.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortComponent } from './sort/sort.component';
import { SortPipe } from './sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FavouriteItemsComponent } from './favourite-items/favourite-items.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    SearchComponent,
    SortComponent,
    SortPipe,
    FavouriteItemsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
