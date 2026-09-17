import { inject, Service, signal, WritableSignal } from '@angular/core';
import IUsuario from '../interfaces/usuario';
import { Supabase } from './supabase';
import { Router } from '@angular/router';
import { Session, User } from '@supabase/supabase-js';

@Service()
export class Auth {
  private supabaseS = inject(Supabase);
  private routerS = inject(Router);

  public usuarioActual: WritableSignal<User | null> = signal<User | null>(null);

  constructor() {
    this.supabaseS.Supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        this.usuarioActual.set(session.user);
        this.routerS.navigateByUrl('/bienvenida');
      } else {
        this.usuarioActual.set(null);
        this.routerS.navigateByUrl('/auth/login')
      }
    });
  }

  public async registrar(usuario: IUsuario) {
    const respuesta = await this.supabaseS.Supabase.auth.signUp({
      email: usuario.email,
      password: usuario.password,
      options: {
        data: {
          nombre: usuario.nombre,
          apellido: usuario.apellido,
        },
      },
    });
  }

  public async iniciarSesion(usuario: IUsuario) {
    const { data, error } = await this.supabaseS.Supabase.auth.signInWithPassword({
      email: usuario.email,
      password: usuario.password,
    });
  }

  public async cerrarSesion() {
    const { error } = await this.supabaseS.Supabase.auth.signOut();
  }
}
