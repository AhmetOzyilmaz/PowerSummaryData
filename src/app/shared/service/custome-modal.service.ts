import {Injectable} from "@angular/core";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {Device} from "../dto/device";

@Injectable()
export class CustomModalService {
  isVisible = false;
  isOkLoading = false;

  deviceModalRef: NzModalRef;

  constructor(private modalService: NzModalService) {
  }


  getDeviceModal(device: Device): NzModalRef<any, any> {
    console.log(device);
    const content = ' <ng-template #modalTitle>' + device.name + '</ng-template>\n' +
      '\n' +
      '      <ng-template #modalContent>\n' +
      '        <p>' + device.uuid + '</p>\n' +
      '      </ng-template>\n' +
      '\n' +
      '      <ng-template #modalFooter>\n' +
      '        <span>Modal Footer:</span>\n' +
      '        <button nz-button nzType="default" (click)="handleCancel()">Custom Callback</button>\n' +
      '        <button nz-button nzType="primary" (click)="handleOk()" [nzLoading]="isConfirmLoading">Custom Submit</button>\n' +
      '      </ng-template>';

    this.deviceModalRef = this.modalService.create({
      nzContent: content,
      nzClosable: true,
      nzComponentParams: device,
      nzFooter: null,
      nzCentered: true,
      nzWidth: '500px',
      nzKeyboard: false,
      nzMaskClosable: true,
      nzOnOk: this.handleOk(),
    });

    return this.deviceModalRef;
  }

  private handleOk(): any {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }
}
