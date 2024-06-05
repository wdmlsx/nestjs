import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      global: true,
    }),
    FileModule,
    // OrderModule,
  ],
})
export class AppModule {}
