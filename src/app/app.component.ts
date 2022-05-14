import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  numero = 0;
  base = 5;

  Sumar1(valor: number) {
    this.numero = this.numero + valor;
  }
}
