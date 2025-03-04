import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private userNameSubject = new BehaviorSubject<string>(''); // Valor inicial vazio
  userName$ = this.userNameSubject.asObservable();
  private userName: string = '';

  constructor() {
    // Tenta recuperar o nome salvo do localStorage
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      this.setUserName(savedName); // Define o nome se encontrado
    }
  }

  setUserName(name: string): void {
    this.userNameSubject.next(name); // Atualiza o nome do usuário
    this.saveName(name); // Salva no localStorage
  }

  saveName(name: string): void {
    this.userName = name;
    localStorage.setItem('userName', name); // Salva o nome no localStorage
  }

  getName(): string {
    return this.userName;
  }
}
