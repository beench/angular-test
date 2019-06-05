import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { HelloServiceService } from './hello-service.service'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [HelloServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
