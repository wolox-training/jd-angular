import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private sessionService: SessionService) {  }

  canActivate(): boolean {
    if (this.sessionService.hasSession()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
