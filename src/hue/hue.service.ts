import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const v3 = require('node-hue-api').v3;
const discovery = v3.discovery;
const hueApi = v3.api;

const appName = 'luna-hue-app';
const deviceName = 'lune-hue-device';

const USERNAME = 'zLvuMOYeiqjBKE0gSTZhaX03YmgoJkcWmxW2V6m6';
const host = '192.168.4.51';
const hue = v3.api.createLocal(host).connect(USERNAME);
const LightState = v3.lightStates.LightState;
const SceneLightState = v3.lightStates.GroupLightState;

@Injectable()
export class HueService {

  // get all lights
  async getAllLights() {
    const allLights = await hue.then((api) => {
      return api.lights.getAll();
    });

    allLights.map((light) => {
      console.log(light.data.id, ' : ', light.data.name);
    });
    return allLights;
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

  // get all scenes
  async getAllScenes() {
    const allScenes = await hue.then((api) => {
      return api.scenes.getAll();
    });

    allScenes.map((scene) => {
      console.log(scene.data.id, ' : ', scene.data.name);
    });
    return allScenes;
  }

  // get scene by name
  async getSceneByName(sceneName: string) {
    const scene = await hue.then((api) => {
      return api.scenes.getSceneByName(sceneName);
    });

    // console.log(scene.data.id, ' : ', scene.data.name);
    return scene;
  }

  // set scene state
  async setSceneById(sceneId: string) {
    const setScene = await hue.then((api) => {
      return api.scenes.activateScene(sceneId);
    });
    return setScene;
  }
  
  // set scene by name
  async setSceneByName(sceneName: string) {
    const scene = await this.getSceneByName(sceneName);
    console.log(scene[0].data.id);
    const { id } = scene[0].data;
    return this.setSceneById(id);
  }
}
