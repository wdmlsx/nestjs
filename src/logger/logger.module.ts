import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggerFactory } from './logger-factory.service';

@Module({
  providers: [
    {
      provide: 'ILogger',
      useClass: LoggerService,
    },
    {
      provide: 'ILoggerFactory',
      useClass: LoggerFactory,
    },
  ],
  exports: ['ILogger', 'ILoggerFactory'],
})
export class LoggerModule {}
