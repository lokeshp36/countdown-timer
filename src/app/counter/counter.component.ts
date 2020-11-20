import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  totalSeconds: number = 60;
  secondsRemaining: number;
  interval: any;

  startButtonDisable = false;
  pauseButtonDisable = true;
  resetButtonDisable = true;

  HH = 0;
  MM = 0;
  SS = 0;

  @Input() set minutes(value: number) {
    this.totalSeconds = 60 * value;
    this.secondsRemaining = 60 * value;
    this.calculateTimeFromSeconds(this.secondsRemaining);
  }

//   @Output() timerComplete = new EventEmitter<any>();

  calculateTimeFromSeconds(seconds: number) {
    this.HH = Math.floor(seconds / 3600) ?? 0;
    this.MM = Math.floor(seconds % 3600 / 60) ?? 0;
    this.SS = Math.floor(seconds % 3600 % 60) ?? 0;
  }

  ngOnInit(): void {
  }

  pauseCounter() {
    this.setButtonStatuses(false, true, false);
    clearInterval(this.interval);
  }

  startCounter() {
    this.setButtonStatuses(true, false, false);
    this.interval = setInterval(() => {
        this.secondsRemaining--;
        this.calculateTimeFromSeconds(this.secondsRemaining);
        if (this.secondsRemaining == 0) {
            this.setButtonStatuses(false, false, true);
            clearInterval(this.interval);
            alert("Timer Completed!")
        }
    },1000)
  }

  resetCounter() {
    this.setButtonStatuses(false, true, true);
    clearInterval(this.interval);
    this.secondsRemaining = this.totalSeconds;
    this.calculateTimeFromSeconds(this.totalSeconds);
  }

  setButtonStatuses(start: boolean, pause: boolean, reset: boolean){
    this.startButtonDisable = start;
    this.pauseButtonDisable = pause;
    this.resetButtonDisable = reset;
  }
}
