import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Angular8-seed';
  isActive = true;

  // solid icons use the prefix 'fas'
  faUserDefault = ['fas', 'square'];
  faUser = ['fab', 'square'];
  faUserCheck = ['fas', 'check-square'];

  toggle(): boolean {
    return this.isActive = !this.isActive;
  }

  onClickBtn(e) {
    this.toggle() ? this.faUserDefault = this.faUser :  this.faUserDefault = this.faUserCheck;
  }
}
