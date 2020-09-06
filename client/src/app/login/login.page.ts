import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import AuthService from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginUserData = {};

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  switchToRegister() {
    this.router.navigate(["/register"]);
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        if (res.message === "Successful login.") {
          this.router.navigate(["./home"]);
          localStorage.setItem("email", res.email);
        }
      },
      (error) => {
        this.loginUserData["password"] = "";
        console.log(error);
      }
    );
  }
}
