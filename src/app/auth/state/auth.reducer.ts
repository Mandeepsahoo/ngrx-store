import { createReducer, on } from '@ngrx/store';
import { autoLogout, loginSuccess, signupSuccess } from './auth.actions';
import { initialState } from './auth.state';

export const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(autoLogout, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
