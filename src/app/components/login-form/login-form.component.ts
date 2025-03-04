import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

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

  logName() {
    if (this.name.invalid) {
      this.name.markAsTouched();
      return;
    }
    this.login.emit(this.name.value ?? '');
  }
}
