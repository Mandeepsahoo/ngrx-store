import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { changeChannelName, customIncrement } from '../state/counter.action';
import {
  getChannelNameSelector,
  getCounterSelector,
} from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelNameSelector);
  }
  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
