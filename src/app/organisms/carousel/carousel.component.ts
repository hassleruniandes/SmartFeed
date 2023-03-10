import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'src/app/services/track-service/track.service.types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() items: Track[] = [];
  @Input() titleCarousel = '';
  @Input() linkCarousel = '';

  constructor() {}

  ngOnInit(): void {}

}
