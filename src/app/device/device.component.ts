import { Component, Input } from '@angular/core';
import { DeviceInfo } from "ngx-device-detector";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent{

  @Input() deviceInfo!: DeviceInfo ;

  constructor() { 

   }

}
