import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  
  constructor(private router: Router, private sessionService: SessionService) {  }

  canActivate(): boolean {
    if (this.sessionService.hasSession()) {
      this.router.navigate(['books']);
      return false;
    } else {
      return true;
    }
  }
  
}
