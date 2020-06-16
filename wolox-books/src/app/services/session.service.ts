import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private TOKEN_KEY: string = 'token';

  constructor(private router: Router) { }

  createSession(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  hasSession(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getSessionToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  deleteSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  authGuard(){
    if (!this.hasSession()) {
      this.router.navigate(['login']);
    } 
    return true;
  }

  unauthGuard(): boolean {
    if (this.hasSession()) {
      this.router.navigate(['books']);
    }
    return true;
  }
}
