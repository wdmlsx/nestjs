import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ILoggerFactory } from '../logger-factory/logger-factory.interface'
import { MyLogger } from "../my-logger/my-logger.service";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";
import { OrderEvent } from './order.interface'
import { inspect } from "util";

@Injectable()
export class OrderService implements OnModuleInit {
    private readonly logger: MyLogger;

    constructor(
        private eventEmitter: EventEmitter2,
        @Inject('ILoggerFactory') loggerFactory: ILoggerFactory
    ) {
        this.logger = loggerFactory.getInstance(this.constructor.name)
    }

    public addOrder(): number {
        const timestamp = Date.now()
        this.logger.warn(`add order: ${timestamp}`)
        return timestamp
    }

    public emit(event: OrderEvent, data: any) {
        this.eventEmitter.emit(event, data)
    }

    public onModuleInit() {
        this.logger.error(`abcdefghijklmnopqrstuvwxyz`)
    }

    @OnEvent(OrderEvent.ADD)
    private linstenEvent(info: any) {
        this.logger.debug(`?? -> ${inspect(info, false, 4)}`)
    }
}