import { Component, OnInit } from '@angular/core';
import {DataMockService} from "../../shared/service/data-mock.service";
import {Device} from "../../shared/dto/device";
import {DeviceData} from "../../shared/dto/device-data";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  devices : Device[] ;
  devicesDatas : DeviceData[];

  constructor(private dataMockService : DataMockService) {
    this.dataMockService.getDevice(10).subscribe( d => {
      this.devices = d;
      const deviceIds = this.devices.map(o => o.uuid);
      this.dataMockService.getDeviceDatas(deviceIds).subscribe( data => this.devicesDatas = data);
    });
  }

  ngOnInit(): void {
  }
}

