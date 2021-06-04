import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounterSelector = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelNameSelector = createSelector(
  getCounterState,
  (state) => {
    return state.channelName;
  }
);
