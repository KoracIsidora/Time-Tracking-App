import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private router: Router) {}

  signOut() {
    this.router.navigate(["./login"]);
  }

  goToTracker() {
    this.router.navigate(["./tracker"]);
  }
}
