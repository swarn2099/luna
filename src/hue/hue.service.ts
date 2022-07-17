import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const v3 = require('node-hue-api').v3;
const discovery = v3.discovery;
const hueApi = v3.api;

const appName = 'luna-hue-app';
const deviceName = 'lune-hue-device';

const LightState = v3.lightStates.LightState;
const USERNAME = 'zLvuMOYeiqjBKE0gSTZhaX03YmgoJkcWmxW2V6m6';
const host = '192.168.4.51';
// The name of the light we wish to retrieve by name
const LIGHT_ID = 1;
const hue = v3.api.createLocal(host).connect(USERNAME);

@Injectable()
export class HueService {
  async discoverBridge() {
    const discoveryResults = await discovery.nupnpSearch();

    if (discoveryResults.length === 0) {
      console.error('Failed to resolve any Hue Bridges');
      return null;
    } else {
      // Ignoring that you could have more than one Hue Bridge on a network as this is unlikely in 99.9% of users situations
      return discoveryResults[0].ipaddress;
    }
  }
  async discoverAndCreateUser() {
    const ipAddress = await this.discoverBridge();

    // Create an unauthenticated instance of the Hue API so that we can create a new user
    const unauthenticatedApi = await hueApi.createLocal(ipAddress).connect();

    let createdUser;
    try {
      createdUser = await unauthenticatedApi.users.createUser(
        appName,
        deviceName,
      );
      console.log(
        '*******************************************************************************\n',
      );
      console.log(
        'User has been created on the Hue Bridge. The following username can be used to\n' +
          'authenticate with the Bridge and provide full local access to the Hue Bridge.\n' +
          'YOU SHOULD TREAT THIS LIKE A PASSWORD\n',
      );
      console.log(`Hue Bridge User: ${createdUser.username}`);
      console.log(`Hue Bridge User Client Key: ${createdUser.clientkey}`);
      console.log(
        '*******************************************************************************\n',
      );

      // Create a new API instance that is authenticated with the new user we created
      const authenticatedApi = await hueApi
        .createLocal(ipAddress)
        .connect(createdUser.username);

      // Do something with the authenticated user/api
      const bridgeConfig =
        await authenticatedApi.configuration.getConfiguration();
      console.log(
        `Connected to Hue Bridge: ${bridgeConfig.name} :: ${bridgeConfig.ipaddress}`,
      );
    } catch (err) {
      if (err.getHueErrorType() === 101) {
        console.error(
          'The Link button on the bridge was not pressed. Please press the Link button and try again.',
        );
      } else {
        console.error(`Unexpected Error: ${err.message}`);
      }
    }
  }

  // set light state
  async setLightState(lightId: number, state: any) {
    const { brightness } = state;
    return hue.then((api) => {
      // Using a LightState object to build the desired state
      const state = new LightState().on().ct(500).brightness(brightness);
      const result = api.lights.setLightState(lightId, state);

      return result;
    });
  }
}
