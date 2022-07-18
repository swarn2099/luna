import { Injectable } from '@nestjs/common';

// import sonos service from sonos module (src/sonos/sonos.service.ts)
import { SonosService } from '../sonos/sonos.service';
// import hue service from hue module (src/hue/hue.service.ts)
import { HueService } from '../hue/hue.service';
// import govee service from govee module (src/govee/govee.service.ts)
import { GoveeService } from '../govee/govee.service';

const sonos = new SonosService();
const hue = new HueService();
const govee = new GoveeService();

@Injectable()
export class ScenesService {
  // Retro Scene
  async startRetroScene(
    hueSceneName,
    goveeDevices,
    notificationUri,
    spotifyUri,
  ) {
    // set hue scene to hueSceneName
    await hue.setSceneByName(hueSceneName);

    // set govee devices to magenta
    goveeDevices.map((device) => {
      govee.changeColor(device.mac, device.model, device.color);
    });

    // play notification
    await sonos.playNotification(notificationUri).then(async (result) => {
      if (result) {
        console.log('Notification played');
        // play music
        await sonos.playMusic(spotifyUri);
      }
    });
  }
}
