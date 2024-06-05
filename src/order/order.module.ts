import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [LoggerModule],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
