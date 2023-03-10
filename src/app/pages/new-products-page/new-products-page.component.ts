import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './new-products-page.component.html',
  styleUrls: ['./new-products-page.component.scss']
})
export class NewProductsPage implements OnInit {

  constructor(private _router: Router) { }

  login(){
    this._router.navigate(['/login']);
  }

  ngOnInit(): void {

  }


}
