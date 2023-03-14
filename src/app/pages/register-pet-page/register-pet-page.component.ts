import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-pet-page',
  templateUrl: './register-pet-page.component.html',
  styleUrls: ['./register-pet-page.component.scss']
})
export class RegisterPetPageComponent implements OnInit {

  constructor(private _router: Router) { }

  welcome(){
    this._router.navigate(['/welcome']);
  }

  goDashboard(){
    this._router.navigate(['/home']);
  }
  goFeeder(){
    this._router.navigate(['/register-feeder']);
  }

  ngOnInit(): void {
  }

}
