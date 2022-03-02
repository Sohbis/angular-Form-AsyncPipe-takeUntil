import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Datamodel } from '../datamodel';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css'],
})
export class WorldComponent implements OnInit, OnDestroy {
  formData: Observable<Datamodel>;
  formData1: Datamodel;
  notifier = new Subject<boolean>();
  constructor(public ds: DataService) {}

  ngOnInit() {
    this.formData = this.ds.$formData;
    this.ds.$formData
      .pipe(takeUntil(this.notifier))
      .subscribe((d: Datamodel) => {
        this.formData1 = d;
        console.log('formData1', this.formData1);
      });
  }
  ngOnDestroy(): void {
    this.notifier.next(false);
    this.notifier.complete();
  }
}
