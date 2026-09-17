import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const sesionGuard: CanActivateFn = (route, state) => {
  const authS = inject(Auth)
  return authS.usuarioActual() !== null;
};
