import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { exec } from 'shelljs';
import { ILogger, ILoggerFactory } from 'src/logger/logger.interface';
import { inspect } from 'util';

import { resolve } from 'path';
import { existsSync } from 'fs';

@Injectable()
export class ShellService {
  private readonly logger: ILogger;

  private filePath: string;

  constructor(@Inject('ILoggerFactory') LoggerFactory: ILoggerFactory) {
    this.logger = LoggerFactory.getInstance(this.constructor.name);
  }
  public async backup() {
    this.filePath = resolve(__dirname, Date.now() + '.sql');

    const result = exec(
      `mysqldump -uroot -pwangdm123456 --databases xl_npm xl_npm_ > ${this.filePath}`,
    );

    if (result.code === 0) {
      this.logger.fatal('result: ', this.filePath);
    } else {
      this.logger.error(`内部错误: ${inspect(result, false, 4)}`);
    }
  }

  public async recovery() {
    if (!this.filePath) throw new BadRequestException('请先备份');

    if (!existsSync(this.filePath)) {
      this.logger.error(`找不到文件: ${this.filePath}`);
      return;
    }

    const result = exec(`mysql -uroot -pwangdm123456 < ${this.filePath}`);

    if (result.code === 0) {
      this.logger.fatal('result: ', this.filePath);
    } else {
      throw new InternalServerErrorException(
        `内部错误: ${inspect(result, false, 4)}`,
      );
    }
  }
}
