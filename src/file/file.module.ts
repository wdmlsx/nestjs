import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';

import { OrderModule } from '../order/order.module';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [LoggerModule, OrderModule],
  providers: [
    {
      provide: 'IFile',
      useClass: FileService,
    },
  ],
  exports: ['IFile'],
  controllers: [FileController],
})
export class FileModule {}
