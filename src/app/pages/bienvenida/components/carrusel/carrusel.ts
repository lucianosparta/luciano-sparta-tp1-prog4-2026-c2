import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pelicula } from '../../../../interfaces/pelicula';

@Component({
  selector: 'app-carrusel',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class Carrusel {
  public peliculas = signal<Pelicula[]>([
    {
      id: '1',
      titulo: 'Deadpool & Wolverine',
      posterUrl: 'https://tse1.mm.bing.net/th/id/OIP.DhFwBb0zTU8wX0ziXG2V3AHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      puesto: 1,
      generos: 'Acción, Comedia',
      formato: '3D / 2D',
    },
    {
      id: '2',
      titulo: 'Intensamente 2',
      posterUrl: 'https://tse1.mm.bing.net/th/id/OIP.DhFwBb0zTU8wX0ziXG2V3AHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      puesto: 2,
      generos: 'Animación, Familia',
      formato: '2D',
    },
    {
      id: '3',
      titulo: 'Alien: Romulus',
      posterUrl: 'https://tse1.mm.bing.net/th/id/OIP.DhFwBb0zTU8wX0ziXG2V3AHaKe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      puesto: 3,
      generos: 'Terror, Sci-Fi',
      formato: '4D / 2D',
    },
  ]);
}