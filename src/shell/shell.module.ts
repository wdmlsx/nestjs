import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger.module';
import { ShellService } from './shell.service';
import { ShellController } from './shell.controller';

@Module({
  imports: [LoggerModule],
  providers: [ShellService],
  exports: [ShellService],
  controllers: [ShellController],
})
export class ShellModule {}
