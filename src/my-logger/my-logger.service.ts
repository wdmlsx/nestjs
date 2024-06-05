import { LoggerService, ConsoleLogger, Injectable, LogLevel } from '@nestjs/common'

export class MyLogger extends ConsoleLogger implements LoggerService {
    constructor(instance: string) {
        super()
        super.setContext(instance)
    }
    // log(message: any, ...optionalParams: any[]) {
    //     throw new Error('Method not implemented.');
    // }
    // error(message: any, ...optionalParams: any[]) {
    //     throw new Error('Method not implemented.');
    // }
    // warn(message: any, ...optionalParams: any[]) {
    //     throw new Error('Method not implemented.');
    // }
    // debug?(message: any, ...optionalParams: any[]) {
    //     throw new Error('Method not implemented.');
    // }
    // verbose?(message: any, ...optionalParams: any[]) {
    //     throw new Error('Method not implemented.');
    // }
    // fatal?(message: any, ...optionalParams: any[]) {
    //     throw new Error('Method not implemented.');
    // }
    // setLogLevels?(levels: LogLevel[]) {
    //     throw new Error('Method not implemented.');
    // }
    
}