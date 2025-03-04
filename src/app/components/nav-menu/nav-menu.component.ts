import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserStateService } from '../../services/user-state.service'; // Importe o serviço

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterModule, CommonModule], // Certifique-se de importar o RouterModule
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  currentRoute: string = ''; // Rota atual
  userName: string = '';

  constructor(
    private router: Router,
    private userStateService: UserStateService
  ) {
    // Atualiza a rota atual para usar na estilização dos links
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  ngOnInit() {
    this.userStateService.userName$.subscribe((name) => {
      this.userName = name; // Atualiza o nome do usuário
    });
  }
}
