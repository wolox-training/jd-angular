import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private sessionService: SessionService) {  }

  canActivate(): boolean {
    return this.sessionService.authGuard();
  }
  
}
