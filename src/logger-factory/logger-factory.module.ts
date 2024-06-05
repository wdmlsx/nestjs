import { Module } from "@nestjs/common";
import { LoggerFactory } from "./logger-factory.service";
import { MyLoggerModule } from "src/my-logger/my-logger.module";

@Module({
    imports: [MyLoggerModule],
    providers: [
        {
            provide: 'ILoggerFactory',
            useClass: LoggerFactory
        }
    ],
    exports: ['ILoggerFactory']
})
export class LoggerModule {}