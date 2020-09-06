import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import AuthService from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})

export class RegisterPage implements OnInit {
  registerUserData = {};

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        if (res.message === "Successfull registration") {
          this.router.navigate(["./home"]);
          localStorage.setItem("email", res.email);
        }
      },
      (error) => console.log(error)
    );
  }
}
