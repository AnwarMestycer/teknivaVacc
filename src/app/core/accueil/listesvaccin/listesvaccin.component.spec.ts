import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesvaccinComponent } from './listesvaccin.component';

describe('ListesvaccinComponent', () => {
  let component: ListesvaccinComponent;
  let fixture: ComponentFixture<ListesvaccinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesvaccinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesvaccinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
