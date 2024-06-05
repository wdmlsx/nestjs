import { Module } from "@nestjs/common";
import { LoggerModule } from '../logger-factory/logger-factory.module'
import { OrderService } from "./order.service";

@Module({
    imports: [LoggerModule],
    providers: [OrderService],
    exports: [OrderService]
})
export class OrderModule {}