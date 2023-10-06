import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieItemsComponent } from './recepie-items.component';

describe('RecepieItemsComponent', () => {
  let component: RecepieItemsComponent;
  let fixture: ComponentFixture<RecepieItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepieItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepieItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
