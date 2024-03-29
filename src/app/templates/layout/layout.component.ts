import { Component,EventEmitter,HostListener,OnInit,Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  showSideBar = window.innerWidth > 700;
  isMoreThan700 = window.innerWidth > 700;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //this.showSideBar = false;
    // this.router.events.subscribe(() => {
    //   if (window.innerWidth < 700) this.showSideBar = false;
    // });
  }

  @HostListener('window:resize')
  onResize() {
    this.isMoreThan700 = window.innerWidth > 700;
    if(!this.isMoreThan700){
      this.showSideBar = false;
    }else{
      this.showSideBar = true;
    }
  }

  procesaToggle(statusSideBar: boolean){
    this.showSideBar = statusSideBar
  }

  actionMenu(){
    (this.showSideBar ? this.showSideBar = false: this.showSideBar = true)
  }

  onClick(isClickOutside = false) {
    // if ((isClickOutside && !this.showSideBar) || window.innerWidth > 700)
    //   return;
    // this.showSideBar = !this.showSideBar;
  }
}
