import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  public authS = inject(Auth);
  private routerS = inject(Router);

  cerrarSesion(): void {
    this.authS.cerrarSesion();
    this.routerS.navigate(['/auth/login']);
  }
}