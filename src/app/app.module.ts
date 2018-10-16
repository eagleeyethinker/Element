import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SimpleComponent } from './simple/simple.component';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [SimpleComponent]

})

export class AppModule {
  constructor(private injector: Injector) {
    const simpleElement = createCustomElement(SimpleComponent, { injector });
    customElements.define('app-simple', simpleElement);
  }

  ngDoBootstrap() {
  }
}
