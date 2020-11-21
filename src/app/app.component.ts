import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countdown-timer';
  showCountdown = false;
  inputToChild: number;

  startCounter() {
    if (this.inputToChild >= 0.1) {
      this.showCountdown = !this.showCountdown;
    }
  }
}
