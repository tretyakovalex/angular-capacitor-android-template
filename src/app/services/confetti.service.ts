import { Injectable } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  private confettiInstance = confetti.create(undefined, { resize: true });

  launchConfetti(event: MouseEvent): void {
    const x = Number((event.clientX / window.innerWidth).toFixed(4));
    const y = Number((event.clientY / window.innerHeight).toFixed(4));

    console.log("x: ", x, "y: ", y);
  
    this.confettiInstance({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
    });
  }
}
