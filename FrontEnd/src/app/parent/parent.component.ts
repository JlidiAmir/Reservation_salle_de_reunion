import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// importing the child for viewchild dicerator
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  // Component communication : viewChild dicerator
  @ViewChild(ChildComponent) child: any;
  constructor() {}

  ngOnInit(): void {}
  // Lifecycle Hook : afterviewinit used for viewchild
  ngAfterViewInit() {
    console.log(this.child);
  }
  //Method for getting data using output eventemitter
  receiveChildMessage(msg: string) {
    alert(msg);
  }
}
