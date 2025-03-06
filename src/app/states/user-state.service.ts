import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private userNameSubject = new BehaviorSubject<string>(
    localStorage.getItem('userName') || ''
  ); // Inicia com o valor do localStorage
  userName$ = this.userNameSubject.asObservable();

  constructor() {}

  setUserName(name: string): void {
    this.userNameSubject.next(name);
    localStorage.setItem('userName', name);
  }

  getName(): string {
    return this.userNameSubject.getValue();
  }
}
