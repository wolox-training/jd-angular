import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  /*  isLogin(): boolean {
      const path = this.activatedRoute.snapshot.routeConfig.path;
      return path === 'login' || path === ''
    }
  
    isRegister(): boolean {
      return this.activatedRoute.snapshot.routeConfig.path === 'sign-up'
    }
  */
}
