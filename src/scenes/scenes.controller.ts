import { Body, Controller, Post } from '@nestjs/common';
import { ScenesService } from './scenes.service';

@Controller('scenes')
export class ScenesController {
  constructor(private readonly scenesService: ScenesService) {}

  // Retro Scene
  @Post('retro')
  async startRetroScene(@Body() body) {
    const { hueSceneName, goveeDevices, notificationUri, spotifyUri } = body;
    await this.scenesService.startRetroScene(
      hueSceneName,
      goveeDevices,
      notificationUri,
      spotifyUri,
    );
  }
}
