import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200/', // Replace with local API
  logLevel: NgxLoggerLevel.WARN,
  serverLogLevel: NgxLoggerLevel.OFF
};
