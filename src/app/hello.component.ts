import { Component, Input } from '@angular/core';
import { Datamodel } from './datamodel';

@Component({
  selector: 'hello',
  template: `<h1>Hello Component:</h1>
  <ng-container *ngIf="formData as f">
  <ng-container *ngIf="f.age <18">
  name: {{ f.name }} gender: {{ f.gender }} age: {{ f.age }}
  </ng-container>
</ng-container>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() formData: Datamodel;
}
