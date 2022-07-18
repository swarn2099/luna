import { Injectable } from '@nestjs/common';

const Govee = require('node-govee-led');

const Client = new Govee({
  apiKey: '072c644b-1652-46ea-a448-bf23ceff26d3',
});
@Injectable()
export class GoveeService {
  // turn on the led
  async turnOn(mac, model) {
    console.log(`turn on ${mac} ${model}`);
    Client.mac = mac;
    Client.model = model;
    const result = await Client.turnOn();
    return result;
  }

  // turn off the led
  async turnOff(mac, model) {
    console.log(`turn off ${mac} ${model}`);
    Client.mac = mac;
    Client.model = model;
    const result = await Client.turnOff();
    return result;
  }

  //   change the color of the led
  async changeColor(mac, model, color) {
    console.log(`change color ${mac} ${model} ${color}`);
    Client.mac = mac;
    Client.model = model;
    const result = await Client.setColor(color);
    return result;
  }

  //   change the brightness of the led
  async changeBrightness(mac, model, brightness) {
    console.log(`change brightness ${mac} ${model} ${brightness}`);
    Client.mac = mac;
    Client.model = model;
    const result = await Client.changeBrightness(brightness);
    return result;
  }

  // get state of the led
  async getState(mac, model) {
    console.log(`get state ${mac} ${model}`);
    Client.mac = mac;
    Client.model = model;
    const result = await Client.getState();
    return result;
  }
}
