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

  @Get('bridges')
  getBridge(): any {
    return this.hueService.discoverAndCreateUser();
  }

  @Post('light')
  setLightState(@Body() state: any): any {
    console.log(state);
    const { lightId, lightState } = state;
    return this.hueService.setLightState(lightId, lightState);
  }
}
