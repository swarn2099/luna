import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HueService } from './hue.service';

@Controller('hue')
export class HueController {
  constructor(private readonly hueService: HueService) {}

  @Get('all')
  getAllLights(): any {
    return this.hueService.getAllLights();
  }

  @Post('light')
  setLightState(@Body() state: any): any {
    const { lightId, lightState } = state;
    return this.hueService.setLightState(lightId, lightState);
  }

  @Get('scenes')
  getAllScenes(): any {
    return this.hueService.getAllScenes();
  }

  @Get('scene/:sceneId')
  getSceneByName(@Param('sceneId') sceneId: string): any {
    console.log(sceneId);
    return this.hueService.getSceneByName(sceneId);
  }

  @Post('scene')
  setSceneState(@Body() state: any): any {
    const { sceneId } = state;
    return this.hueService.setSceneById(sceneId);
  }

  @Post('scene/:sceneName')
  setSceneByName(@Param('sceneName') sceneName: string): any {
    return this.hueService.setSceneByName(sceneName);
  }

}
