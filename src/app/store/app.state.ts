import { SharedState } from './Shared/shared.state';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { SharedReducer } from './Shared/shared.reducer';
import { AuthState } from '../auth/state/auth.state';
import { AUTH_STATE_NAME } from '../auth/state/auth.selectors';
import { authReducer } from '../auth/state/auth.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
  router: RouterReducerState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: authReducer,
  router: routerReducer,
};
