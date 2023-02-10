import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'VGC-QRCode Generator';
  yourData: string = '';
  qrData: string = '';

  submit(event: Event) {
    this.qrData = (event.target as HTMLInputElement).value;
  }
}
