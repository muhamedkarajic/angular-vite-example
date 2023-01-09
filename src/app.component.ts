import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
  <p class="test"> xHello, this is angular, avite </p>
  <a routerLink="/" href="#" class="text-xl font-bold no-underline hover:underline ...">Home | </a>
  <a routerLink="/about-us" href="#" class="text-xl font-bold no-underline hover:underline ...">About us</a>
  <hr>
  <router-outlet></router-outlet>
  `,
  styles: [
    `
      .test{
        color: blue
      }
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {

    console.log('hello world');
  }

  ngOnInit(): void { }
}
