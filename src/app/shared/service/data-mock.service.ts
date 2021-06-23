import {Inject} from "@angular/core";
import {Device} from "../dto/device";

import * as uuid from 'uuid';
import {Observable, of} from "rxjs";
import {DeviceData} from "../dto/device-data";

@Inject({providedIn: 'root',})
export class DataMockService {

  getDevice(num: number): Observable<Device[]> {
    let devices = [] as Device[];

    for (let i = 0; i < num; ++i) {
      devices.push(
        {
          name: "device-1",
          uuid: uuid.v4()
        })
    }
    return of(devices);
  }

  getDeviceDatas(deviceIds: string[]): Observable<DeviceData[]> {
    const devicesData = [] as DeviceData[];

    for (let i = 0; i < deviceIds.length; ++i) {
      const batteryPercentage = Math.floor(Math.random() * 100) + 1;
      devicesData.push(
        {
          batteryPercentage: batteryPercentage + '%',
          createDate: new Date(),
          deviceId: deviceIds[i],
          lastUpdateDate: new Date(),
          status: batteryPercentage < 50 ? 'LOW' : 'HIGH'
        });
    }
    return of(devicesData);
  }
}
