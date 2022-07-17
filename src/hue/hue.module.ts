import { Module } from '@nestjs/common';
import { HueService } from './hue.service';
import { HueController } from './hue.controller';

@Module({
  controllers: [HueController],
  providers: [HueService]
})
export class HueModule {}
