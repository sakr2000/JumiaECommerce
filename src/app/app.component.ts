import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageBannerComponent } from "./Components/image-banner/image-banner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JumiaECommerce';
}
