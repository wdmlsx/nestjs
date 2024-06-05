import { Module } from "@nestjs/common";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";

import { MyLoggerModule } from '../my-logger/my-logger.module'
import { LoggerModule } from "src/logger-factory/logger-factory.module";
import { OrderModule } from '../order/order.module'

@Module({
    imports: [
        // MyLoggerModule,
        LoggerModule,
        OrderModule,
    ],
    providers: [
        {
            provide: 'IFile',
            useClass: FileService
        }
    ],
    exports: ['IFile'],
    controllers: [FileController]
})
export class FileModule {}