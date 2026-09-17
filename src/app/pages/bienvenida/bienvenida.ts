import { Component } from '@angular/core';
import { Carrusel } from './components/carrusel/carrusel';

@Component({
  imports: [Carrusel],
  selector: 'app-bienvenida',
  styleUrl: './bienvenida.css',
  templateUrl: './bienvenida.html',
})
export class Bienvenida {}
