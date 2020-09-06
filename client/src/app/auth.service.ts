import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export default class AuthService {
  private loginURL = "http://localhost:3000/auth";
  private registerURL = "http://localhost:3000/registration";
  private timesURL = "http://localhost:3000/times";

  constructor(private http: HttpClient) {}

  loginUser(user) {
    return this.http.post<any>(this.loginURL, user);
  }

  registerUser(user) {
    return this.http.post<any>(this.registerURL, user);
  }

  saveTimes(time) {
    return this.http.post<any>(this.timesURL, time)
  }
}
