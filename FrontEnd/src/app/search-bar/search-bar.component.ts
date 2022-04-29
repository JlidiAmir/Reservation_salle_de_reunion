import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() title: string;
  @Input() bgColor: string;

  constructor() {
    this.title = '';
    this.bgColor = 'aliceblue';
  }

  ngOnInit(): void {}
}
