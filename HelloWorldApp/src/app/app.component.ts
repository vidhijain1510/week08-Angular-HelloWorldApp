import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldApp';
  imgUrl: string ='assets/BL_logo_square_jpg.jpg';
  url = "https://www.bridgelabz.com/";
  userName: string = "";

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz."
  }

  onClick($event : MouseEvent){
    console.log("Save Button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
