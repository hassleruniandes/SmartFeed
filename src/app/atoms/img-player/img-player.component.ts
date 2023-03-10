import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img-player',
  templateUrl: './img-player.component.html',
  styleUrls: ['./img-player.component.scss']
})
export class ImgPlayerComponent implements OnInit {

  @Input() altImage = '';
  @Input() srcImage = '';
  @Input() isPlaying: Boolean = false;

  @Output('customClick') clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
