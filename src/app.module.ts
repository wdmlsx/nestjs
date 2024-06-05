import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ShellModule } from './shell/shell.module';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      global: true,
    }),
    FileModule,
    ShellModule,
    // OrderModule,
  ],
})
export class AppModule {}
