import { Component, Input, OnInit } from '@angular/core';
import { HyperLink } from 'src/app/interfaces/basics';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 userFullName: String = '';
 firstName: String = '';
 tipoSaludo: String = '';
 appTitle: String = '';

 links: HyperLink[] = [
    {
      name: 'Home 🏠',
      href: '/',
      color: '#212a5a',
    },
    {
      name: 'Favorites ⭐',
      href: '/favorites',
      color: '#212a5a'
    },
    {
      name: 'Salir 🥺',
      href: 'logout',
      color: '#212a5a'
    },
  ];
  menuShown = false;
  constructor() {

  }

  checkTipoSaludo(){
    var day = new Date();
    var hr = day.getHours();
      if (hr >= 0 && hr < 12) {
        this.tipoSaludo = 'Good Morning 🌄'
      } else if (hr >= 12 && hr <= 17) {
        this.tipoSaludo = 'Good Afternoon ⛅'
      } else {
        this.tipoSaludo = 'Good Nigth 🌃'
      }
  }
  ngOnInit() {  }

}

