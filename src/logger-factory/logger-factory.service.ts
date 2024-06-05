import { Injectable } from "@nestjs/common";
import { MyLogger } from "../my-logger/my-logger.service";
import { ILoggerFactory } from "./logger-factory.interface";

@Injectable()
export class LoggerFactory implements ILoggerFactory {

    public getInstance(name: string): MyLogger {
        return new MyLogger(name)
    }
}