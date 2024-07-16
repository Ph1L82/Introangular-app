import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Hola mundo angular!';
  subtitle: string = 'Contador con estado de session';
  // users?: string[];
  users: string[] = ['Pepe', 'María', 'Juan', 'Andres'];
  visible: boolean = false;
  counter: number = 0;
  setVisible(): void {
    this.visible = !this.visible;
  }
  setCounter(counter: number): void {
    this.counter = counter;
  }
}
