import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit{
  isConfirmLoading = false;
  isVisible = false;

  loginFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false),
    resetPasswordMail: new FormControl('')
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  loginInit(): void {
    for (const i in this.loginFormGroup.controls) {
      if (this.loginFormGroup.controls.hasOwnProperty(i)) {
        this.loginFormGroup.controls[i].markAsDirty();
        this.loginFormGroup.controls[i].updateValueAndValidity();
      }
    }
    localStorage.setItem("token","xxxxxxx");
    this.router.navigate(['/'])
  }
}
