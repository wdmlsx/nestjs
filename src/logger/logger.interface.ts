import { LoggerService } from '@nestjs/common';

export interface ILogger extends LoggerService {}

export interface ILoggerFactory {
  getInstance(name: string): ILogger;
}
