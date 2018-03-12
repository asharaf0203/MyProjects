import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class CrawfordBaseService<T> {

  protected default: T;

  protected source = new BehaviorSubject<T>(this.default);
  public current: Observable<T> = this.source.asObservable();

  constructor() { }

  public set(details: T) {
    if (details) {
      this.source.next(details);
    } else {
      this.source.next(this.default);
      console.error('A null object was passed to the ' + this.constructor.name);
    }
  }
}
