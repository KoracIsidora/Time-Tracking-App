import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import AuthService from "../auth.service";

@Component({
  selector: "app-tracker",
  templateUrl: "./tracker.page.html",
  styleUrls: ["./tracker.page.scss"],
})
export class TrackerPage implements OnInit {
  timeData = {};

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}

  signOut() {
    this.router.navigate(["./login"]);
  }

  startTiming() {}
}
