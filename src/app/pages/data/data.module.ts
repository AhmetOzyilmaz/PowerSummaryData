import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';

@NgModule({
  imports: [
    CommonModule,
    DataRoutingModule,
    FormsModule,
    NzButtonModule,
    NzFormModule,
  ],
  declarations: [DataComponent],
  exports: [DataComponent],
})
export class DataModule {
}
