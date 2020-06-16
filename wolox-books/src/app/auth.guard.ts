import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SessionService } from './session.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private sessionService: SessionService) {  }

  canActivate(): boolean {
    return this.sessionService.authGuard();
  }
  
}
