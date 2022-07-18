import { Body, Controller, Get, Put } from '@nestjs/common';
import { SonosService } from './sonos.service';

@Controller('sonos')
export class SonosController {
  constructor(private readonly sonosService: SonosService) {}

  // discover devices and groups
  @Get('discover')
  async discoverDevices() {
    return this.sonosService.discoverDevices();
  }

  // play
  @Put('play')
  async play() {
    return this.sonosService.play();
  }

  // pause
  @Put('pause')
  async pause() {
    return this.sonosService.pause();
  }

  // play music
  @Put('play-music')
  async playMusic(@Body() body: any) {
    const { uri } = body;
    return this.sonosService.playMusic(uri);
  }

  // play notification
  @Put('notification')
  async playNotification(@Body() body: any) {
    const { uri } = body;
    return this.sonosService.playNotification(uri);
  }
}
