import { Module } from '@nestjs/common';
import { PixooService } from './pixoo.service';
import { PixooController } from './pixoo.controller';

@Module({
  controllers: [PixooController],
  providers: [PixooService]
})
export class PixooModule {}
