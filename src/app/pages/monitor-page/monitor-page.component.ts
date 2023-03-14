import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-monitor-page',
  templateUrl: './monitor-page.component.html',
  styleUrls: ['./monitor-page.component.scss']
})
export class MonitorPageComponent implements OnInit {


  constructor(private _router: Router) { }

  goDashboard(){
    this._router.navigate(['/home']);
  }
  goEditFeeder(){
    this._router.navigate(['/edit-feeder']);
  }

  ngOnInit(): void {

  }

}
