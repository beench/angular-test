import { Component, Output, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-first-app";

  yourName: string;
  // childName: string;
  childName = "Bobby";

  constructor() {}
  setName(yourName) {
    this.yourName = yourName;
  }

  // setChildName(childName) {
  //   this.childName = childName;
  //   console.log(this.childName);
  // }
}
