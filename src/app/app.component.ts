import { Component } from "@angular/core";
import { DeviceDetectorService, DeviceInfo } from "ngx-device-detector";
import { NGXLogger } from "ngx-logger";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  deviceInfo!: DeviceInfo;
  enable = false;

  constructor(private logger: NGXLogger, private deviceService: DeviceDetectorService) {

  }

  deviceDisplay() {
    this.logger.debug("Inside device button click");
    this.deviceInfo = this.deviceService.getDeviceInfo();
    //this.logger.debug("Received  os:{0}, browser:{1},device:{2}, os_version:{3}, browser_version:{4},deviceType:{5},"+ this.deviceInfo.os,this.deviceInfo.browser,this.deviceInfo.device,this.deviceInfo.os_version,this.deviceInfo.browser_version,this.deviceInfo.deviceType);
    this.enable = !this.enable;
  }
}