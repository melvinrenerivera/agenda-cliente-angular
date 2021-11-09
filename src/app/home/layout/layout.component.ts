import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent implements OnInit {

  name? : string;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.name = this.authService.getName();
  }

  logout(){
    this.authService.logout();
    this.authService.isLoggeout();
    this.router.navigate(["/auth/login"]);
  }

}
