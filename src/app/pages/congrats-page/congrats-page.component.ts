import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-congrats-page',
  templateUrl: './congrats-page.component.html',
  styleUrls: ['./congrats-page.component.scss']
})
export class CongratsPageComponent implements OnInit {

  constructor(private _router: Router) { }

  avanzar(){
    this._router.navigate(['/home']);
  }

  ngOnInit(): void {

  }


}
