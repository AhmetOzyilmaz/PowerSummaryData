import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import {NzCardModule} from "ng-zorro-antd/card";

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NzCardModule
  ],
  declarations: [DataComponent],
  exports: [DataComponent],
})
export class DataModule {
}
