import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Hello There!');
  });

  it('should output value FooBar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const value = '15'
    const component = fixture.componentInstance;
    component.generateOutputText(value, false);
    fixture.detectChanges();
    const outuput = fixture.debugElement.nativeElement;
    expect(outuput.querySelector('input[disabled]').placeholder).toContain('FooBar');
  });

  it('should output value Foo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const value = '30000003'
    const component = fixture.componentInstance;
    component.generateOutputText(value, false);
    fixture.detectChanges();
    const outuput = fixture.debugElement.nativeElement;
    expect(outuput.querySelector('input[disabled]').placeholder).toContain('Foo');
  });

  it('should output value Bar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const value = '-123455'
    const component = fixture.componentInstance;
    component.generateOutputText(value, false);
    fixture.detectChanges();
    const outuput = fixture.debugElement.nativeElement;
    expect(outuput.querySelector('input[disabled]').placeholder).toContain('Bar');
  });

  it('should output no value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const value = '005'
    const component = fixture.componentInstance;
    component.generateOutputText(value, false);
    fixture.detectChanges();
    const outuput = fixture.debugElement.nativeElement;
    expect(outuput.querySelector('input[disabled]').placeholder).toBe('');
  });

  it('should output no value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const value = '5'
    const component = fixture.componentInstance;
    component.generateOutputText(value, true);
    fixture.detectChanges();
    const outuput = fixture.debugElement.nativeElement;
    expect(outuput.querySelector('input[disabled]').placeholder).toBe('');
  });

});