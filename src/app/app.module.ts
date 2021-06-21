import {registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {BnNgIdleService} from 'bn-ng-idle';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NZ_I18N, tr_TR} from 'ng-zorro-antd/i18n';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IconsProviderModule} from './icons-provider.module';
import {LoginComponent} from './pages/login/login.component';
import en from '@angular/common/locales/en';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {TokenInterceptor} from './shared/interceptor/token.interceptor';
import {ErrorInterceptor} from './shared/interceptor/error.interceptor';
import {TokenExpiredInterceptor} from './shared/interceptor/token-expired.interceptor';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {AuthorizationService} from './shared/service/authorization.service';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzWaveModule,
    NzSelectModule,
    NzDividerModule,
    NzToolTipModule,
    NzCardModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzResultModule,
    NzSelectModule,
    NzTableModule,
    NzIconModule,
    NzSwitchModule,
    NzSpaceModule,
    NzDatePickerModule,
    NzRadioModule,
    JwtModule,
    NzEmptyModule,
    NzStatisticModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NzModalModule,
    NzDropDownModule,
  ],
  providers: [
    AuthorizationService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    {provide: NZ_I18N, useValue: tr_TR},
    BnNgIdleService,
    NzNotificationService,
    NzMessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenExpiredInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
