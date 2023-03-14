import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-pet-page',
  templateUrl: './register-feeder.component.html',
  styleUrls: ['./register-feeder.component.scss']
})
export class RegisterFeederComponent implements OnInit {

  constructor(private _router: Router) { }

  welcome(){
    this._router.navigate(['/notifications']);
  }
  goDashboard(){
    this._router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
