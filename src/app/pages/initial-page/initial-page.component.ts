import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(private _router: Router) { }

  login(){
    this._router.navigate(['/login']);
  }

  ngOnInit(): void {

  }


}
