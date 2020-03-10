import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav .navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 10px;}
    @media (max-width: 1200px){
      #searchForm{
        display:none;
      }
    }
  `]
})
export class NavBarComponent {
  constructor(public authService: AuthService) {

  }

}
