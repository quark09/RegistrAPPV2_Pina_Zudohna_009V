import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CredencialesPage } from './credenciales.page';

describe('CredencialesPage', () => {
  let component: CredencialesPage;
  let fixture: ComponentFixture<CredencialesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CredencialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
