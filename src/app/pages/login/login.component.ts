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
    username: '',
    password: '',
  };

  loginHandler() {
    this.http.post('https://dummyjson.com/auth/login', this.loginObj).subscribe(
      (res: any) => {
        if (res?.id) {
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigateByUrl('dashboard');
        }
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
