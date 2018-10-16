import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SimpleComponent } from './simple/simple.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

