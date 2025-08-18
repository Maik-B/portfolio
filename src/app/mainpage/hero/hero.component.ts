import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  frontendLetters = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd'];
  devLetters = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];

  toggleCase(letter: string, event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.innerText === letter) {
      // Wechsel zu Groß/Kleinbuchstaben
      target.innerText = letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
      target.style.color = 'orange';
    } else {
      // Zurück zum Original
      target.innerText = letter;
      target.style.color = '';
    }
  }
}
