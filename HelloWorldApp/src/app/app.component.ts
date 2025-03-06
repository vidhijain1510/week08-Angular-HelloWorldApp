import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldApp';
  imgUrl: string ='assets/BL_logo_square_jpg.jpg';
  url = "https://www.bridgelabz.com/";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz."
  }

  onClick($event : MouseEvent){
    console.log("Save Button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event: InputEvent) {
    console.log("change Event Occurred!", ($event.target as HTMLInputElement).value);
    const nameRegex =RegExp('^[A-Z][a-zA-Z\s]{2,}$'); // Starts with uppercase, min 3 chars
  
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
      this.nameError = "Name is Incorrect!";
    
  }
}
