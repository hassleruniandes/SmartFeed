import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private _router: Router) { }

  login(){
    this._router.navigate(['/home']);
  }

  ngOnInit(): void {

  }


}
