import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  email: string;
  tokenSetInterval;

  constructor(private router: Router,
              private changeDetectorRef: ChangeDetectorRef,
              private translateService: TranslateService,
              private jwtHelperService: JwtHelperService) {
  }

  ngOnInit() {
    const emailStr = localStorage.getItem('email');
    if (emailStr) {
      this.email = JSON.parse(emailStr);
    }

    this.changeDetectorRef.detectChanges();
    this.tokenSetInterval = setInterval(() => {
      this.controlTokenExpired();
    }, 60);
  }


  collapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  controlTokenExpired(): void {
    const token = localStorage.getItem('token');
    const isTokenExpired = this.jwtHelperService.isTokenExpired(token);
    if (isTokenExpired) {
      this.router.navigateByUrl('/login');
      localStorage.clear();
      clearInterval(this.tokenSetInterval);
    }
  }
}
