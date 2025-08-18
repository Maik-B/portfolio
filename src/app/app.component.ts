import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { MainpageComponent } from './mainpage/mainpage.component';
import {TranslateService, TranslatePipe, TranslateDirective} from "@ngx-translate/core"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, TranslatePipe, TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate:TranslateService){
    this.translate.addLangs(['de','en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
