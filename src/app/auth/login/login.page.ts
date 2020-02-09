import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  User: string;
  Pass: string;

  constructor() { }

  ngOnInit() {
  }

  signIn(){
    console.log('Mi usuario es: '+this.User,'y la Contraseña es: '+this.Pass)
  }

}
