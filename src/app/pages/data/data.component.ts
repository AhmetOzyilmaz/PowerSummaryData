import { Component, OnInit } from '@angular/core';
import {DataMockService} from "../../shared/service/data-mock.service";
import {Device} from "../../shared/dto/device";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  devices : Device[] ;

  constructor(private dataMockService : DataMockService) {
    this.devices = this.dataMockService.getDevice(10);
  }

  ngOnInit(): void {
  }
}

