import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent  {
  title = 'Simple Angular Element';
  @Input() name: string;
  @Input() answer: string;

  handleclick() {
    console.log('hey I am  clicked in element');
}
}
