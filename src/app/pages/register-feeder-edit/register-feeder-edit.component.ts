import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-pet-page',
  templateUrl: './register-feeder-edit.component.html',
  styleUrls: ['./register-feeder-edit.component.scss']
})
export class RegisterFeederEditComponent implements OnInit {

  constructor(private _router: Router) { }

  welcome(){
    this._router.navigate(['/monitor']);
  }

  goDashboard(){
    this._router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
