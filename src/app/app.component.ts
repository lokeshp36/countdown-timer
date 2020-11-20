import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countdown-timer';
  showCountdown = false;
  inputToChild: number = 0;

  startCounter() {
    if (this.inputToChild > 0) {
      this.showCountdown = !this.showCountdown;
    }
  }
}
