import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserStateService } from '../../states/user-state.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  currentRoute: string = '';
  userName: string = '';
  isMenuOpen = false;

  constructor(
    private router: Router,
    private userStateService: UserStateService
  ) {
    // Atualiza a rota atual para usar na estilização dos links
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
    this.currentRoute = this.router.url;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.userStateService.userName$.subscribe((name) => {
      this.userName = name;
    });
  }
}
