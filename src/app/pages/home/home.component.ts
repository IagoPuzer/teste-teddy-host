import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  handleLogin() {
    this.router.navigate(['/clients']);
  }
}
