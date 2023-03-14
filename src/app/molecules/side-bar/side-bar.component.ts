import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  linksMenu: Array<any> = []

  @Input() showSideBar: boolean = true;

  @Output() toggleSideBar = new EventEmitter<boolean>();

  actionMenu(){

    if(this.showSideBar){
      this.showSideBar = false;
    }else{
      this.showSideBar = true;
    }

    this.toggleSideBar.emit(this.showSideBar);

  }

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {


    this.linksMenu = [
      {
        name: 'NUEVA MASCOTA',
        icon: 'bi bi-house',
        protected: false,
        show: true,
        router: 'register-pet',
        className: 'text-white'
      },
      {
        name: 'NUEVO ALIMENTADOR',
        icon: 'bi bi-dribbble',
        protected: true,
        show: true,
        router: 'register-feeder',
        className: 'text-white'
      },
      {
        name: 'NOTIFICACIONES',
        icon: 'bi bi-cash-coin',
        protected: false,
        show: true,
        router: 'notifications',
        className: 'text-white'
      },
      {
        name: 'CERRAR SESIÓN',
        icon: 'bi-box-arrow-right',
        show: true,
        router: 'login',
        className: 'text-custom-danger'
      }
    ]

  }

}
