import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceComponent } from './device.component';

describe('DeviceComponent', () => {
  let component: DeviceComponent;
  let fixture: ComponentFixture<DeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(DeviceComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    //mocking deviceInfo dependency
    component.deviceInfo ={orientation:"",userAgent:"",os:"Mac",  browser:"Safari",device:"Macintosh", os_version:"mac-os-x-15", browser_version:"13.0.3",deviceType:"desktop"};
    fixture.detectChanges();
  });
  it('should create device component', () => {
    expect(component).toBeTruthy();
  });

});
