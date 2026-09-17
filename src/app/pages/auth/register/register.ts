import { Component, inject } from '@angular/core';
import { Auth } from '../../../services/auth';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import IUsuario from '../../../interfaces/usuario';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  private authS = inject(Auth);

  public formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  accion() {
    if (this.formulario.valid) {
      this.authS.registrar(this.formulario.value as IUsuario);
    }
  }
}
