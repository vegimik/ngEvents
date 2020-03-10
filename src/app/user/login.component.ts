import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  // selector: 'app-name',
  templateUrl: './login.compoent.html'
  // styleUrls: ['./name.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any
  password: any
  mouseoverLogin: boolean
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login(formValues){
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(["events"])
  }

  cancel(){
    this.router.navigate(["events"])
  }
}
