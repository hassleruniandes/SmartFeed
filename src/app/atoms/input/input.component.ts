import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  isInputEmpty: boolean = true;
  @Input() placeholder = '';
  @Input() titleInput = '';
  @Input() inputValue = '';
  @Input() width = '100%';
  @Input() type = 'text';
  @Input() iconStyle: string = '';
  @Input() formNameText: string = '';
  constructor() { }

  ngOnInit(): void {

  }

}
