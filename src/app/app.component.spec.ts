import { TestBed,ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component,Input, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { DeviceInfo } from 'ngx-device-detector';
import { NGXLogger } from "ngx-logger";
import { NGXLoggerMock } from 'ngx-logger/testing';

@Component({selector: 'app-device', template: ''})
class DeviceComponent {
  @Input() deviceInfo!: DeviceInfo;
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let divEl: DebugElement;
  let buttonEl: DebugElement;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        DeviceComponent,
      ],
      //mocking NGXLogger
     providers: [ { provide: NGXLogger, useClass: NGXLoggerMock } ],
    }).compileComponents();
    // create component and test fixture
    fixture = TestBed.createComponent(AppComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    fixture.detectChanges();
    divEl = fixture.debugElement.query(By.css('div'));
    buttonEl = fixture.debugElement.query(By.css('button'));
   
  });
  
  it('On page load device detector div should not be defined', () => {
    expect(divEl.nativeElement.disabled).toBeUndefined();
});

it('Setting enabled to true enables the div', () => {
    component.enable = true;
    fixture.detectChanges();
    expect(divEl.nativeElement.disabled).toBeFalsy();
});
it('Device detect button should load deviceInfo field and enable device detect div', () => {
  buttonEl.triggerEventHandler('click', null);

  // Now we can check to make sure the emitted value is correct
  expect(component.deviceInfo).toBeDefined();
  expect(divEl.nativeElement.disabled).toBeFalsy();
});
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'device-detector-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
   
  });

});
