import { MyLogger } from '../my-logger/my-logger.service'
export interface ILoggerFactory {
    getInstance(name: string): MyLogger
}