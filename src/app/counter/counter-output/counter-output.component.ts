import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounterSelector } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter: number;
  //counter: number;
  // counterSubscription: Subscription;

  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.counterSubscription =
    // this.store.select(getCounterSelector).subscribe((channelName) => {
    //   console.log('counter observable');
    //   this.counter = channelName;
    // });
    this.counter$ = this.store.select(getCounterSelector);
    // }

    // ngOnDestroy() {
    //   if (this.counterSubscription) {
    //     this.counterSubscription.unsubscribe();
    //   }
    // }
  }
}
