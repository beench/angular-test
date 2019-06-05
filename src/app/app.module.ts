import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ChildComponentComponent } from "./components/child-component/child-component.component";
import { HelloServiceService } from "./hello-service.service";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, ChildComponentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { 
        path: "child", 
        component: ChildComponentComponent }
    ])
  ],
  providers: [HelloServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
