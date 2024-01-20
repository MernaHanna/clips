import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  @Input() color: string = 'blue';

  // get keyword represents a getter function.. the purpose is to return a modified property
  // we don't want to access the color property direrctly
  // get keyword returns a property therefore we will be using bgcolor not bgcolor() in the template
  get bgColor() {
    return `bg-${this.color}-400`;
  }

  constructor() { }

  ngOnInit(): void {
    //
  }
}
