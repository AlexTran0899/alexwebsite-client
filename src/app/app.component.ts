import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroInfoComponent, ImageCardComponent, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alexwebsite-client';
}
