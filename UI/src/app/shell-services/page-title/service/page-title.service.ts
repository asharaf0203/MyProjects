import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { IPageTitle } from '../model/page-title.model';
import { CrawfordBaseService } from '../../base-service/base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPageTitleAction } from '../model/page-title-action.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CrawfordPageTitleService extends CrawfordBaseService<IPageTitle> {

  protected addActionSource = new Subject<IPageTitleAction>();
  public actionAdded = this.addActionSource.asObservable();

  protected changeTitleSource = new Subject<string>();
  public titleChange = this.changeTitleSource.asObservable();

  private addEvent: EventEmitter<any> = new EventEmitter<any>();
  private closeEvent: EventEmitter<any> = new EventEmitter<any>();
  private saveEvent: EventEmitter<any> = new EventEmitter<any>();

  public add: Observable<any> = this.addEvent.asObservable();
  public close: Observable<any> = this.closeEvent.asObservable();
  public save: Observable<any> = this.saveEvent.asObservable();

  constructor(private router: Router) {
    super();
    this.default = {
      title: ''
    };
  }

  public addAction(action: IPageTitleAction) {
    if (action) {
      const navigateAction = {
        callback: () => {
          if (action.route) {
            this.router.navigate(action.route);
          }
          if (action.callback) {
            return action.callback();
          }
        },
        icon: action.icon,
        title: action.title
      };

      this.addActionSource.next(navigateAction);
    } else {
      console.error('A null page title action object was passed to the ' + this.constructor.name);
    }
  }

  public registerAdd(callback: () => any) {
    this.addStandardAction('add', 'fa fa-plus-circle', callback, this.addEvent);
  }

  public registerAddRoute(commands: any[]) {
    this.registerAdd(() => this.router.navigate(commands));
  }

  public registerClose(callback: () => any) {
    this.addStandardAction('close', 'fa fa-times', callback, this.closeEvent);
  }

  public registerCloseRoute(commands: any[]) {
    this.registerClose(() => this.router.navigate(commands));
  }

  public registerSave(callback: () => any) {
    this.addStandardAction('save', 'fa fa-save', callback, this.saveEvent);
  }

  public registerSaveRoute(commands: any[]) {
    this.registerSave(() => this.router.navigate(commands));
  }

  private addStandardAction(title: string, icon: string, callback: () => any, event: EventEmitter<any>) {
    if (callback) {
      this.addActionSource.next({
        callback: () => event.emit(callback()),
        icon: icon,
        title: title
      });
    }
  }

  public setTitle(title: string) {
    if (title) {
      this.changeTitleSource.next(title);
    }
  }

  public setFromRoute(route: ActivatedRoute): void {
    const pageTitle: IPageTitle = this.getPageTitle(route);
    this.set(pageTitle);
  }

  private getPageTitle(route: ActivatedRoute): IPageTitle {
    if (route.children.length === 0) {
      return this.readTitleFromRoute(route);
    } else {
      return this.getPageTitle(route.firstChild);
    }
  }

  private readTitleFromRoute(route: ActivatedRoute): IPageTitle {
    return { title: route.snapshot.data['title'] };
  }
}
