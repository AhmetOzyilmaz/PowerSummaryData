import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { DirtyComponent } from '../modal/dirty-component';

@Injectable({
  providedIn: 'root'
})
export class DirtyCheckGuard implements CanDeactivate<DirtyComponent> {
  confirmTitle = '';
  confirmContent = '';
  okText = '';
  cancelText = '';

  constructor(private modalService: NzModalService){
  }
  canDeactivate(
    component: DirtyComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return of(component.canDeactivate()).pipe(switchMap(dirty => {
        if ( dirty === false ) {
          return of(true);
        }
        let navigate;
        return this.modalService.confirm({
          nzTitle: this.confirmTitle,
          nzContent: this.confirmContent,
          nzOkText: this.cancelText,
          nzCancelText: this.okText,
          nzOnOk() {
            navigate = false;
          },
          nzOnCancel() {
            navigate = true;
          }
        }).afterClose.pipe(map(() => navigate));
      }), take(1));
    }
  }

