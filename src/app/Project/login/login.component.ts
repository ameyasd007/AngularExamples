import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  errorMessage: string = null;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {
      this.usersService
        .getUsers()
        .then((usersData: any[]) => {
          if (
            usersData.find(
              user =>
                user.username === this.loginForm.value.username &&
                user.password === this.loginForm.value.password
            )
          ) {
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigateByUrl('/products');
          } else {
            localStorage.setItem('isLoggedIn', null);
            this.errorMessage = 'Invalid login credentials.';
          }
        })
        .catch();
    } else {
      this.errorMessage = 'Please fill all the details.';
    }
  }
}
