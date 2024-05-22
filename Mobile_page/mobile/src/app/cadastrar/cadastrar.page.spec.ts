import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CadastrarPage } from './cadastrar.page';

describe('CadastrarPage', () => {
  let component: CadastrarPage;
  let fixture: ComponentFixture<CadastrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPage], // Declaração do componente a ser testado
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CadastrarPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
