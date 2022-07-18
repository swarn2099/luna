import { Body, Controller, Get, Put } from '@nestjs/common';
import { GoveeService } from './govee.service';

@Controller('govee')
export class GoveeController {
  constructor(private readonly goveeService: GoveeService) {}

  // turn on the led
  @Put('turnOn')
  turnOn(@Body() state: any): any {
    const { mac, model } = state;
    return this.goveeService.turnOn(mac, model);
  }

  // turn off the led
  @Put('turnOff')
  turnOff(@Body() state: any): any {
    const { mac, model } = state;
    return this.goveeService.turnOff(mac, model);
  }

  // change the color of the led
  @Put('changeColor')
  changeColor(@Body() state: any): any {
    const { mac, model, color } = state;
    return this.goveeService.changeColor(mac, model, color);
  }

  // change the brightness of the led
  @Put('changeBrightness')
  changeBrightness(@Body() state: any): any {
    const { mac, model, brightness } = state;
    return this.goveeService.changeBrightness(mac, model, brightness);
  }

  // get state of the led
  @Get('getState')
  getState(@Body() state: any): any {
    const { mac, model } = state;
    return this.goveeService.getState(mac, model);
  }


}
