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
  book_list = [
    {name: "11111"},
    {name: "22222"},
    {name: "33333"}
  ]

  constructor() {}
  setName(yourName) {
    this.yourName = yourName;
  }

  setParentName(parentName) {
    this.parentName = parentName;
  }
}
