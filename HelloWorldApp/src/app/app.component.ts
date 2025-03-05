import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorldApp';

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz."
  }
}
