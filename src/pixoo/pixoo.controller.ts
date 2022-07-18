import { Controller, Put } from '@nestjs/common';
import { PixooService } from './pixoo.service';

@Controller('pixoo')
export class PixooController {
  constructor(private readonly pixooService: PixooService) {}

  @Put('test')
  async test() {
    await this.pixooService.test();
  }
}
