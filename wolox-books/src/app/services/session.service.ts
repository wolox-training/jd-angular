import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private TOKEN_KEY: string = 'token';

  constructor() { }

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
}
