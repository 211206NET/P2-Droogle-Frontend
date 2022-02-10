import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanvasPageComponent } from './canvas-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule} from '@auth0/auth0-angular';

describe('CanvasPageComponent', () => {
  let component: CanvasPageComponent;
  let fixture: ComponentFixture<CanvasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AuthModule.forRoot({
        domain: 'random',
        clientId: 'doesntmatter'
      })],
      declarations: [ CanvasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
