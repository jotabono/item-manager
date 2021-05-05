import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FavouriteItemsComponent } from './favourite-items.component';

describe('FavouriteItemsComponent', () => {
  let component: FavouriteItemsComponent;
  let fixture: ComponentFixture<FavouriteItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ng2SearchPipeModule],
      declarations: [FavouriteItemsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
