import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  http = inject(HttpClient);
  router = inject(Router);

  loginObj: any = {
    emial: '',
    password: '',
  };

  loginHandler() {
    this.http
      .post('http://localhost:9000/emp/api/v1/auth/signin', this.loginObj)
      .subscribe(
        (response: any) => {
          if (response?.id) {
            localStorage.setItem('user', JSON.stringify(response));
            this.router.navigateByUrl('dashboard');
          }
        },
        (error) => {
          alert(error.error.message);
        }
      );
  }
}
