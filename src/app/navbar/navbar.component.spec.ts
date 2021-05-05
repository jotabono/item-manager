import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PositioningService } from 'ngx-bootstrap/positioning';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [BsModalService, ComponentLoaderFactory, PositioningService],
      declarations: [NavbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
