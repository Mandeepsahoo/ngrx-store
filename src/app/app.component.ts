import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogin } from './auth/state/auth.actions';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoading } from './store/Shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showLoading$: Observable<boolean>;
  errorMesage$: Observable<string>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.showLoading$ = this.store.select(getLoading);
    this.errorMesage$ = this.store.select(getErrorMessage);
    this.store.dispatch(autoLogin());
  }
}
