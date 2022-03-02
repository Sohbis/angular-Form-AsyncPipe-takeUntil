import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Datamodel } from './datamodel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  $formData: Subject<Datamodel> = new Subject<Datamodel>();
  constructor() {}
}
