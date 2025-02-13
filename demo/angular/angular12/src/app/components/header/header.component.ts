import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isExpanded: boolean;
  @Output() expand = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
