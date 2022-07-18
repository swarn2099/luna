import { Injectable } from '@nestjs/common';
import { DeviceDiscovery, Sonos } from 'sonos';
const sonos = new Sonos(process.env.SONOS_HOST || '192.168.4.65');

@Injectable()
export class SonosService {
  //discover devices and groups
  async discoverDevices() {
    // event on all found...
    // find one device
    DeviceDiscovery().once(
      'DeviceAvailable',
      (device: { host: string; getAllGroups: () => Promise<any> }) => {
        console.log('found device at ' + device.host);

        // get all groups
        return device.getAllGroups().then((groups: any[]) => {
          groups.forEach((group: { Name: any }) => {
            console.log(group, group.Name);
          });
        });
      },
    );
  }

  //play
  async play() {
    sonos.play().then(() => console.log('now playing'));
  }

  //pause
  async pause() {
    sonos.pause().then(() => console.log('paused'));
  }

  //play music
  async playMusic(uri: any) {
    sonos.play(uri).then(() => console.log('now playing'));
  }

  //play notification
  async playNotification(uri: any) {
    const result = await sonos.playNotification({
      uri,
      onlyWhenPlaying: false, // It will query the state anyway, don't play the notification if the speaker is currently off.
      volume: 30, // Change the volume for the notification, and revert back afterwards.
    });

    console.log(result);
    return result;
  }
}
