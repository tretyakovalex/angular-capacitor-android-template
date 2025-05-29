import { Component } from '@angular/core';
import { ConfettiService } from './services/confetti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  habits: {name: string, isCompleted: boolean}[] = [
    {name: "Drink Water 💧", isCompleted: false},
    {name: "Workout 🏋️‍♂️", isCompleted: false},
    {name: "Read 10 Pages 📚", isCompleted: false}
  ];

  constructor(private confettiService: ConfettiService){}

  onCheckboxChange(event: MouseEvent, index: number): void {
    const mouseEvent = event as MouseEvent;
    console.log(mouseEvent);
    this.habits[index].isCompleted = true;
    this.confettiService.launchConfetti(mouseEvent);
  }
}
