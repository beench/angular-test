import { Component, Output, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "my-first-app";

  yourName: string;
  childName = "Bobby";
  parentName = "";

  age: number;

  constructor() {}
  setName(yourName) {
    this.yourName = yourName;
  }

  setParentName(parentName) {
    this.parentName = parentName;
  }

  // setChildName(childName) {
  //   this.childName = childName;
  //   console.log(this.childName);
  // }
}
