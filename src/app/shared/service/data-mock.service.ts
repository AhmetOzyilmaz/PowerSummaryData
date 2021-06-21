import {Inject} from "@angular/core";
import {Device} from "../dto/device";

import * as uuid from 'uuid';

@Inject({providedIn: 'root',})
export class DataMockService {

  getDevice(num: number) {
    let devices = [] as Device[];

    for (let i = 0; i < num; ++i) {
      devices.push(
        {
          name: "device-1",
          uuid: uuid.v4()
        })
    }
    return devices
  }
}
