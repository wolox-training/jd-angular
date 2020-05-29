import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private sessionService: SessionService, private router: Router) { }

  closeSession() {
    this.sessionService.deleteSession();
    this.router.navigate(['login']);
  }
}
