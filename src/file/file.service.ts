import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { FileEvent, IFile } from './file.interface';
import { OrderService } from 'src/order/order.service';
import { OrderEvent, OrderEvent2 } from 'src/order/order.interface';
import { inspect } from 'util';
import { ILogger, ILoggerFactory } from 'src/logger/logger.interface';
import { Inject } from '@nestjs/common';

// @Injectable()
export class FileService implements IFile {
  private logger: ILogger;

  constructor(
    @Inject(EventEmitter2) private eventEmitter: EventEmitter2,
    @Inject(OrderService) private readonly orderService: OrderService,
    @Inject('ILoggerFactory') LoggerFactory: ILoggerFactory,
  ) {
    this.logger = LoggerFactory.getInstance(this.constructor.name);
  }

  public async addFile(): Promise<string> {
    this.orderService.addOrder();

    this.eventEmitter.emit(FileEvent.ADD_FILE, {
      name: 'wangdm',
      age: 18,
      addr: '江苏省 宿迁市 沭阳县 万匹乡 杨庄村 八组 0437号',
    });

    this.orderService.emit(OrderEvent.ADD, { fuck: '啥时候能发财呢？' });

    return `Emit ${FileEvent.ADD_FILE}`;
  }

  public async delFIle(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public emit(event: FileEvent, data: any) {
    this.eventEmitter.emit(event, data);
  }

  @OnEvent(FileEvent.ADD_FILE)
  private async testEvent(info: any) {
    console.log('???????????????????', info);
  }

  @OnEvent(OrderEvent.ADD)
  private linstenEvent(info: any) {
    this.logger.debug(`!! -> ${inspect(info, false, 4)}`);
  }

  @OnEvent(OrderEvent2.ADD)
  private linstenEvent2(info: any) {
    this.logger.debug(`99 -> ${inspect(info, false, 4)}`);
  }
}
