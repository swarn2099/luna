import { Injectable } from '@nestjs/common';
import axios from 'axios';
import Pixoo from 'pixoo';
const pixoo = new Pixoo('192.168.4.98', 64);
const gifResize = require('@gumlet/gif-resize');
const fs = require('fs');
@Injectable()
export class PixooService {
  // pixoo test
  async test() {
    // initialize
    await pixoo.init();
    const response = await axios.get(
      'https://i.giphy.com/media/QxZEtFE02ofY00gJ71/200.gif',
      { responseType: 'arraybuffer' },
    );
    const buffer = Buffer.from(response.data, 'utf-8');
    const gifFrames = require('gif-frames');
    const fs = require('fs');

    gifFrames({ url: buffer, frames: 'all' }).then(function (frameData) {
      console.log(frameData);
    });
    // gifResize({
    //   width: 64,
    //   height: 64,
    // })(buffer).then(async (data) => {
    //   // draw image at (0, 0)
    //   //   await pixoo.drawImage(data, [0, 0]);

    //   const payload = JSON.stringify({
    //     Command: 'Draw/SendHttpGif',
    //     PicNum: 2,
    //     PicWidth: 64,
    //     PicOffset: 0,
    //     PicID: 3,
    //     PicSpeed: 100,
    //     PicData: data.toString('base64'),
    //   });

    //   const config = {
    //     method: 'post',
    //     url: 'http://192.168.4.98/post',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     data: payload,
    //   };

    //   axios(config)
    //     .then(function (response) {
    //       console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // });
  }
}
