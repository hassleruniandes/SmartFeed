import { Component, Input, OnInit } from '@angular/core';
import { HyperLink } from 'src/app/interfaces/basics';
@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent implements OnInit {

  @Input('links') links: HyperLink[] = [];
  constructor() { }

  ngOnInit() {}

}
