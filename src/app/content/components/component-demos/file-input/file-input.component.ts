import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'file-input-demo',
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
  preserveWhitespaces: true,
})
export class FileInputDemoComponent {
  files: any;
}
