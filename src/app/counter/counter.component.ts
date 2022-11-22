import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/actions/counter.action';
import { selectCurrentCount, selectPreviousCount } from '../store/selectors/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public currentCount$!: Observable<number>;
  public previousCount$!: Observable<number>;

  constructor(private store: Store) {
    this.currentCount$ = store.select(selectCurrentCount);
    this.previousCount$ = store.select(selectPreviousCount);
  }

  ngOnInit(): void {
  }

  public increment(): void {
    this.store.dispatch(increment());
  }

  public decrement(): void {
    this.store.dispatch(decrement());
  }

  public reset(): void {
    this.store.dispatch(reset());
  }
}
