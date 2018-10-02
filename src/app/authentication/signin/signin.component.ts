import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              public jwtHelper: JwtHelperService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log(form.value);
    this.authenticationService.onLogin(new User(form.value)).subscribe(resp => {
      const token = resp.headers.get('Authorization');
      console.log(this.jwtHelper.decodeToken(token));
      if (resp.ok === true) {
        this.router.navigateByUrl('dashboard');
      }
    });
  }

}
