import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userName: string = '';
  constructor(private router: Router) {}

  handleLogin(name: string) {
    this.userName = name; // Armazena o nome do usuário
    this.router.navigate(['/clients']);
  }
}
