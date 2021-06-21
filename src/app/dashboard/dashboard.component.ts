import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
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
    if (token == undefined || token == null) {
      this.router.navigateByUrl('/login');
      localStorage.clear();
      clearInterval(this.tokenSetInterval);
    }
  }
}
