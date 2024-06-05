import { Controller, Get, Inject, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShellService } from './shell.service';

@Controller('shell')
@ApiTags('Shell')
export class ShellController {
  constructor(
    @Inject(ShellService) private readonly shellService: ShellService,
  ) {}

  @Get()
  public async dump(): Promise<void> {
    this.shellService.backup();
  }

  @Put()
  public async recovery(): Promise<void> {
    this.shellService.recovery();
  }
}
