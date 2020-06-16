import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable()
export class UnauthGuard implements CanActivate {
  
  constructor(private router: Router, private sessionService: SessionService) {  }

  canActivate(): boolean {
    return this.sessionService.unauthGuard();
  }
  
}
