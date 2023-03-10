import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() showSideBar = false;
  linksMenu: Array<any> = [];


  ngOnInit(): void {

    this.linksMenu = [
      {
        name: 'Home',
        icon: 'bi bi-house',
        router: [`/`]
      },
      {
        name: 'Recomendados',
        icon: 'bi bi-dribbble',
        router: [`/recommends`]
      },
      {
        name: 'Favorites',
        icon: 'bi bi-dribbble',
        router: [`/favorites`]
      },
      {
        name: 'Logout',
        icon: 'bi-box-arrow-right',
        router: ['/logout']
      }
    ]

  }

  logout() {
    localStorage.removeItem('tokenHeyMussic');
  }

}
