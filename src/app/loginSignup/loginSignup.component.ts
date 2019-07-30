import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './loginSignup.component.html',
  styleUrls: ['./loginSignup.component.scss']
})

export class LoginSignupComponent implements OnInit {
  @ViewChild('registerToLogin') registerToLogin: ElementRef;
  @ViewChild('loginToRegister') loginToRegister: ElementRef;
  imageLogoPath: string = '';
  signupIdentity: string = "";
  identityFieldEmpty: boolean = false;
  signup: boolean = true;
  movement: boolean = false;
  textDisapear: boolean = false;
  signupLoginHide: boolean = false;
  init = false;
  signupTextDisapear: boolean = true;
  buttonName: string = 'app.signup.loginDiv.button';
  loginIdentity: string;
  loginPassword: string;
  loginError: boolean;
  identifiRepeated: boolean = false;
  loadingLogin = false;
  loadingSignUp = false;
  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
  }
  changeToLogin(){
    this.signup = false;
  }
  move(){
    setTimeout(()=>{
      this.movement?
        this.imageLogoPath = '' :
        this.imageLogoPath = '';
    },!this.movement ? 350 : 1000)

    this.init = true;
    this.movement = !this.movement;
    setTimeout(() => {this.textDisapear = !this.textDisapear}, 500);
    setTimeout(() => {
      this.signupLoginHide = !this.signupLoginHide;
      !this.movement ? this.buttonName = 'app.signup.loginDiv.button' : this.buttonName =  'app.login.signupDiv.button';
      this.signupTextDisapear = !this.signupTextDisapear
    }, !this.movement ? 800 : 400);
    
  }
  changeToSignUp(){
    this.loadingSignUp = true;
    this.identifiRepeated = false;
     if(this.signupIdentity.length === 9){
      this.identityFieldEmpty = false;
     } else {
      this.loadingSignUp = false;
      this.identityFieldEmpty = true;
     }
  }

  login(): void {
    this.loadingLogin = true;
  }
  
  loginOk(codigo: number): boolean {
    return codigo != 0 ? false : true;
  }


}
