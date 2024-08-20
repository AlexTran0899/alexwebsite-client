import { Component } from '@angular/core';

@Component({
  selector: 'hero-info',
  standalone: true,
  imports: [],
  templateUrl: './hero-info.component.html',
  styleUrl: './hero-info.component.css'
})
export class HeroInfoComponent {
  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
