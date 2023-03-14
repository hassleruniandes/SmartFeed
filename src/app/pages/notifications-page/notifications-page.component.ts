import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-pet-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {

  constructor(private _router: Router) { }
  range: number = 25;
  bubble: number = 25;


  welcome(){
    this._router.navigate(['/proxima-comida']);
  }
  goDashboard(){
    this._router.navigate(['/home']);
  }

  setBubble(range: any){
    this.range = range;
    this.bubble = Number(((this.range - 0) * 100) / (100 - 0));
    console.log(this.bubble);

  }

  ngOnInit(): void {
  }

}
