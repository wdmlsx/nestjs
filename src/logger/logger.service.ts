import { ConsoleLogger } from '@nestjs/common';
import { ILogger } from './logger.interface';

export class LoggerService extends ConsoleLogger implements ILogger {
  constructor(instance: string) {
    super();
    super.setContext(instance);
  }
  // log(message: any, ...optionalParams: any[]) {
  //     throw new Error('Method not implemented.');
  // }
  // error(message: any, ...optionalParams: any[]) {
  //     throw new Error('Method not implemented.');
  // }
  // warn(message: any, ...optionalParams: any[]) {
  //     throw new Error('Method not implemented.');
  // }
  // debug?(message: any, ...optionalParams: any[]) {
  //     throw new Error('Method not implemented.');
  // }
  // verbose?(message: any, ...optionalParams: any[]) {
  //     throw new Error('Method not implemented.');
  // }
  // fatal?(message: any, ...optionalParams: any[]) {
  //     throw new Error('Method not implemented.');
  // }
  // setLogLevels?(levels: LogLevel[]) {
  //     throw new Error('Method not implemented.');
  // }
}
