import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { ILogger, ILoggerFactory } from './logger.interface';

@Injectable()
export class LoggerFactory implements ILoggerFactory {
  public getInstance(name: string): ILogger {
    return new LoggerService(name);
  }
}
