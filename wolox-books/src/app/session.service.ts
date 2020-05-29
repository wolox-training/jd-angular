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
    let token = null;

    if (localStorage.length > 0) {
      token = localStorage.getItem(this.TOKEN_KEY);
    }

    return !!token;
  }

  deleteSession(): void {
    localStorage.removeItem(this.TOKEN_KEY)
  }
}
