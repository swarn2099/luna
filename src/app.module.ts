import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HueModule } from './hue/hue.module';
import { GoveeModule } from './govee/govee.module';
import { SonosModule } from './sonos/sonos.module';
import { ScenesModule } from './scenes/scenes.module';
import { PixooModule } from './pixoo/pixoo.module';

@Module({
  imports: [HueModule, GoveeModule, SonosModule, ScenesModule, PixooModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
