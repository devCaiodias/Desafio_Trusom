import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  form;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  handleSubmit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;
    if (typeof email !== 'string' || typeof password !== 'string') {
      alert('Email ou senha inválidos!');
      return;
    }
    this.authService.login({ email, password }).subscribe({
      next: () => {
        console.log('Login feito com sucesso!');
        this.router.navigate(['/dashborad']); // redireciona para a home ou dashboard
      },
      error: (err) => {
        console.error('Erro no login:', err);
        alert('Email ou senha incorretos!');
      }
    });
  }
}
