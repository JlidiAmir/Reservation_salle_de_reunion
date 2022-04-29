import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  // Component communication : output dicerator
  @Output() childCustomEvent = new EventEmitter<string>();
  // Component communication : input dicerator
  @Input() message: string;
  showText = false;

  constructor(private route: ActivatedRoute) {
    this.message = 'Hi Im child ';
  }
  //Lifecycle Hook : OnInit
  ngOnInit(): void {
    alert(this.route.snapshot.paramMap.get('id'));
  }
  toggleText() {
    this.showText = !this.showText;
  }
  sendMessage() {
    this.childCustomEvent.emit('Papa you got this ?');
  }
}
