import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresenterComponent {
  @Input() browser: any;
}
