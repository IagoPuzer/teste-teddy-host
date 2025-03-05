import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserStateService } from '../../services/user-state.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  name = new FormControl('', Validators.required);

  @Output() login = new EventEmitter<string>();

  constructor(private userStateService: UserStateService) {}

  submitLogin() {
    if (this.name.invalid) {
      this.name.markAsTouched();
      return;
    }

    // Salva o nome no serviço quando o login for disparado
    this.userStateService.setUserName(this.name.value ?? '');

    // Emitindo o evento para o componente pai
    this.login.emit(this.name.value ?? '');
  }
}
