import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes 123';
  onSave() {
    console.log('onSave fired!');
  }
  onToggle() {
    this.title = this.title ? '' : 'Tour of Heroes';
  }
}
