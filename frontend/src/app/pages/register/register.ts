import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  handleSubmit() {
    if (this.form.invalid) return;

    this.authService.register(this.form.value).subscribe({
      next: (res: any) => {
        console.log('Usuário registrado com sucesso:', res);
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Erro ao registrar:', err);
      }
    });
  }
}
