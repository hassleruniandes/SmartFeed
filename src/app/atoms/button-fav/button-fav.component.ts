import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-button-fav',
  templateUrl: './button-fav.component.html',
  styleUrls: ['./button-fav.component.scss']
})
export class ButtonFavComponent implements OnInit {

  @Input() text = '';
  @Input() bgColor = 'transparent';
  @Input() customStyle = '';
  @Input() isFavorite: boolean = false;
  @Output('customClick') clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
