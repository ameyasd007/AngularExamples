import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesMasterComponent } from './heroes-master.component';

describe('HeroesMasterComponent', () => {
  let component: HeroesMasterComponent;
  let fixture: ComponentFixture<HeroesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
