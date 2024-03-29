import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-monitor-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor(private _router: Router) { }

  monitor(){
    this._router.navigate(['/monitor']);
  }

  ngOnInit(): void {

  }

}
