import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-pet-page',
  templateUrl: './register-user-page.component.html',
  styleUrls: ['./register-user-page.component.scss']
})
export class RegisterUserPageComponent implements OnInit {

  constructor(private _router: Router) { }

  welcome(){
    this._router.navigate(['/welcome']);
  }
  login(){
    this._router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
